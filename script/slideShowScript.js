console.log("Loading slideshow script");
const slideshowContainer = document.getElementById("slideshow");
const slides = [
    "flowersagain.jpg",
    "floralbackground.jpg",
    "Rose-Pink-Flower-Wallpaper-HD.jpg"
];

let currentIndex = 0;

function preloadImage(url) {
    const img = new Image();
    img.src = "./slideshowimages/" + url;
}

function exchangeImages() {
    const currentImage = slides[currentIndex];
    slideshowContainer.style.backgroundImage = `url(./slideshowimages/${currentImage})`;
    currentIndex = (currentIndex + 1) % slides.length;
}


slides.forEach(preloadImage);

exchangeImages(); 

setInterval(exchangeImages, 3000);
