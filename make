#!/usr/bin/env bash
# shellcheck disable=SC2230

##############################################
## Dependency Check

which gulp > /dev/null
GULP_INSTALLED=$?

which gifsicle > /dev/null
GIFSICLE_INSTALLED=$?

which md5 > /dev/null
MD5_INSTALLED=$?

if [ $MD5_INSTALLED -ne 0 ]; then
  which md5sum > /dev/null
  MD5_INSTALLED=$?
fi

which pngcrush > /dev/null
PNGCRUSH_INSTALLED=$?

which svgo > /dev/null
SVGO_INSTALLED=$?

which jpegtran > /dev/null
JPEGTRAN_INSTALLED=$?

which jq > /dev/null
JQ_INSTALLED=$?

which uglifycss > /dev/null
UGLIFYCSS_INSTALLED=$?

which uglifyjs > /dev/null
UGLIFYJS_INSTALLED=$?

if [ $GULP_INSTALLED -ne 0 ] || \
   [ $GIFSICLE_INSTALLED -ne 0 ] || \
   [ $PNGCRUSH_INSTALLED -ne 0 ] || \
   [ $SVGO_INSTALLED -ne 0 ] || \
   [ $JPEGTRAN_INSTALLED -ne 0 ] || \
   [ $MD5_INSTALLED -ne 0 ] || \
   [ $JQ_INSTALLED -ne 0 ] || \
   [ $UGLIFYCSS_INSTALLED -ne 0 ] || \
   [ $UGLIFYJS_INSTALLED -ne 0 ]; then
  echo "The following software is required:"
  echo
  echo "      gulp: $([ $GULP_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "        jq: $([ $JQ_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "  gifsicle: $([ $GIFSICLE_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "md5/md5sum: $([ $MD5_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "  pngcrush: $([ $PNGCRUSH_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "      svgo: $([ $SVGO_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "  jpegtran: $([ $JPEGTRAN_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo " uglifycss: $([ $UGLIFYCSS_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  echo "  uglifyjs: $([ $UGLIFYJS_INSTALLED -eq 0 ] && echo "Installed" || echo "Not Installed")"
  exit 1
fi

##############################################
## Preamble

set -o errexit
set -o nounset
set -o pipefail

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CACHE_DIR="${__dir}/.cache"
if ! [ -d "$CACHE_DIR" ]; then
  mkdir -p "$CACHE_DIR"
fi

##############################################
## Utility

function header {
	echo -e "\\033[96m==[ ${1} ]==\\033[0m"
}

function update_manifest () {
  FILE_NAME=${1#"dist/"}
  DIR_NAME="$(dirname "$FILE_NAME")/"
  EXTENSION=${FILE_NAME##*.} # Assume it's a single-dot extension, i.e. no .tar.gz
  FILE_PREFIX=${FILE_NAME%%".$EXTENSION"}
  FILE_SHA=$(shasum "$1" | awk '{print $1}' | cut -b 1-10)
  OUTPUT="${DIR_NAME#"./"}$(basename "$FILE_PREFIX")-${FILE_SHA}.${EXTENSION}"
  (cat dist/manifest.json 2>/dev/null || echo "{}") | jq ".[\"$FILE_NAME\"]=\"${OUTPUT}\"" > dist/_tmp.json 
  mv dist/_tmp.json dist/manifest.json
  echo "$OUTPUT"
}

function md5_hash {
  if which md5 > /dev/null; then
    # Prefer `md5`
    md5 -q "$1"
  else
    # Fall back to `md5sum`, but cut the first field
    md5sum "$1" | cut -d' ' -f 1
  fi
}

##############################################
## Tasks

# Uglify and compress CSS to the dist folder.
function css () {
  header "css"
  uglifycss src/parrot.css > dist/assets/parrot.css
  mv dist/assets/parrot.css "dist/$(update_manifest dist/assets/parrot.css)"
}

# Uglify and compress JavaScript to the dist folder.
function js () {
  header "js"
  for f in src/*.js; do
    distfile="dist/assets/${f/src\//}"
    uglifyjs "$f" > "$distfile" 
    mv "$distfile" "dist/$(update_manifest "$distfile")"
  done
}

# Copy and compress asset images to the dist folder.
function images () {
  header "images"
  cp src/favicon.ico dist/favicon.ico

  while IFS= read -r -d '' FILE; do
    CACHE_FILE="$CACHE_DIR/${FILE##"src/"}-$(md5_hash "$FILE")"
    if ! [ -f "$CACHE_FILE" ]; then
      case ${FILE##*.} in
        "gif")
          gifsicle --optimize=3 "$FILE" > "$CACHE_FILE"
          ;;
        "jpg")
          jpegtran -progressive -optimize -copy none -outfile "$CACHE_FILE" "$FILE"
          ;;
        "png")
          pngcrush -reduce -s "$FILE" "$CACHE_FILE"
          ;;
        "svg")
          svgo --input="$FILE" --output="$CACHE_FILE"
          ;;
        *)
          "Unknown file type: $FILE"
          ;;
      esac
    fi
    cp "$CACHE_FILE" "dist/assets/${FILE##"src/"}"
  done < <(find src \( -name '*.gif' -o -name '*.png' -o -name '*.jpg' -o -name '*.svg' \) -print0)

  cp -r parrots dist/parrots
  cp -r guests dist/guests
  cp -r flags dist/flags
  cp -r still dist/still
}

# Make gif's into zip files.
function compress () {
  header "compress"
  printf "      ~= Party or Die =~\\n~= cultofthepartyparrot.com =~" | zip -q -o -r -z  "$CACHE_DIR/parrots.zip" ./parrots/*
  cp "$CACHE_DIR/parrots.zip" "dist/parrots.zip"
  mv dist/parrots.zip "dist/$(update_manifest dist/parrots.zip)"

  printf "      ~= Party or Die =~\\n~= cultofthepartyparrot.com =~" | zip -q -o -r -z  "$CACHE_DIR/guests.zip" ./guests/*
  cp "$CACHE_DIR/guests.zip" "dist/guests.zip"
  mv dist/guests.zip "dist/$(update_manifest dist/guests.zip)"

  printf "      ~= Party or Die =~\\n~= cultofthepartyparrot.com =~" | zip -q -o -r -z  "$CACHE_DIR/flags.zip" ./flags/*
  cp "$CACHE_DIR/flags.zip" "dist/flags.zip"
  mv dist/flags.zip "dist/$(update_manifest dist/flags.zip)"
}

# Run tests with gulp
function test () {
  header "test"
  gulp test
}

# Delete all the dist files.
function clean () {
  header "clean"
  rm -rf dist/*
  mkdir -p dist/assets
}

# Delete all the cached compressed images
function clean-cache () {
  header "clean-cache"
  rm -rf dist/*
  mkdir -p dist/assets
}

function render-still () {
  sources=( parrots guests flags )
  for src in "${sources[@]}"; do
    mkdir -p "still/$src/"
    for f in "$src"/*.gif; do
      # shellcheck disable=SC1087
      convert -coalesce "$f[0]" "still/${f/.gif/.png}"
    done
    for f in "$src"/hd/*.gif; do
      g=${f/hd\//}
      # shellcheck disable=SC1087
      convert -coalesce "$f[0]" "still/${g/.gif/.png}"
    done
  done
}

##############################################
## GTD

function main () {
  case ${1:-} in
    "test")
      test
      ;;
    "clean")
      clean
      clean-cache
      ;;
    "readme")
      gulp render-readme
      ;;
    "build")
      header "build"
      test
      clean
      render-still
      js
      css
      images
      compress
      gulp render-humans
      gulp render-web
      cp parrots.json dist/
      cp guests.json dist/
      cp flags.json dist/
      ;;
    *)
      echo "usage: $0 <test|clean|readme|build>"
      ;;
  esac
}

# shellcheck disable=SC2068
main $@
