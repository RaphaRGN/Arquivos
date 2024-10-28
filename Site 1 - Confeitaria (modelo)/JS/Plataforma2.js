
let currentSlide = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    
    if (index >= slides.length) { currentSlide = 0; }
    if (index < 0) { currentSlide = slides.length - 1; }

    
    for (let slide of slides) {
        slide.classList.remove("show");
    }

    
    slides[currentSlide].classList.add("show");
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}


showSlide(currentSlide);
