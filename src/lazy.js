// Lazy load gifs
(function () {
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
})();
