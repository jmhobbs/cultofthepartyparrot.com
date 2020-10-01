document.addEventListener("DOMContentLoaded", function() {
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener("click", function (e) {
      if(e.target.matches("img.lazy")) {
        if(e.target.matches("img.running")) {
          e.target.classList.remove("running");
          e.target.src = e.target.dataset["still"];
        } else {
          e.target.dataset["still"] = e.target.src;
          e.target.src = e.target.dataset.src;
          e.target.classList.add("running")
        }
      }
    });
    return;
  }

  var images = document.querySelectorAll('.lazy');
  if (!('IntersectionObserver' in window)) {
    Array.from(images).forEach(function (img) {
      img.src = img.data.src;
    });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          // Stop watching and load the image
          observer.unobserve(entry.target);
          entry.target.src = entry.target.dataset.src;
        }
      });
    },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      });
    images.forEach(function (img) { observer.observe(img); } );
  }
});
