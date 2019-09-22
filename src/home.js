if(window.console && window.console.log) { 
  console.log("PARTY PARROT WANTS YOUR SOUL: http://codepen.io/codevinsky/full/LWprYo/");
  if(/Linux/.test(window.navigator.platform)) {
    console.log("wget https://github.com/jbaublitz/knock-out/archive/master.zip && unzip master.zip && cd knock-out-master && make && sudo insmod parrot.ko && sudo mknod /dev/parrot c \"$(cat /proc/devices | grep parrot |  awk '{print $1}' | tr -d '\\n')\" 0 && cat /dev/parrot");
  }
}

// Random Flag Parrots
fetch('/flags.json').then(function(response) {
  return response.json();
}).then(function(flags) {
  var keys = Object.keys(flags);
  shuffle(keys);
  for(i = 0; i < 6; i++){
    document.getElementById("flag-" + i).src = "/flags/" + flags[keys[i]].hd;
  }
});

// https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle (array) {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
