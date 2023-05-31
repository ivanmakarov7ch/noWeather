const lazyImages = document.querySelectorAll("img[data-src]");
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPosition = [];
if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
      lazyScrollCheck();
    }
  });
}
// console.log(lazyImagesPosition);

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) {
    lazyScrollCheck();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPosition.findIndex((item) => pageYOffset > item - windowHeight);
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    }
    delete lazyImagesPosition[imgIndex];
  }
}
