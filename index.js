// Slider One

let slideIndex = 0;

function showSlide() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= document.getElementsByClassName("slide").length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("slide").length - 1;
  }
  showSlide();
}

showSlide();

setInterval(nextSlide, 2000);

// Slider Two
let slideIndexTwo = 0;

function showSlideTwo() {
  let slidesTwo = document.getElementsByClassName("slideTwo");
  for (let i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = "none";
  }
  slidesTwo[slideIndexTwo].style.display = "block";
}

function nextSlideTwo() {
  slideIndexTwo++;
  if (slideIndexTwo >= document.getElementsByClassName("slideTwo").length) {
    slideIndexTwo = 0;
  }
  showSlideTwo();
}

function prevSlideTwo() {
  slideIndexTwo--;
  if (slideIndexTwo < 0) {
    slideIndexTwo = document.getElementsByClassName("slideTwo").length - 1;
  }
  showSlideTwo();
}

showSlideTwo();

setInterval(nextSlideTwo, 2000);

// Slider Three
let slideIndexThree = 0;

function showSlideThree() {
  let slidesThree = document.getElementsByClassName("slideThree");
  for (let i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = "none";
  }
  slidesThree[slideIndexThree].style.display = "block";
}

function nextSlideThree() {
  slideIndexThree++;
  if (slideIndexThree >= document.getElementsByClassName("slideThree").length) {
    slideIndexThree = 0;
  }
  showSlideThree();
}

function prevSlideThree() {
  slideIndexThree--;
  if (slideIndexThree < 0) {
    slideIndexThree = document.getElementsByClassName("slideThree").length - 1;
  }
  showSlideThree();
}

showSlideThree();

setInterval(nextSlideThree, 2000);
