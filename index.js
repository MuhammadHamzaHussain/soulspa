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
