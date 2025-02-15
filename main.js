let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}


function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


// Auto change slide every 5 seconds

setInterval(() => {
    changeSlide(1);
}, 2500);


// Initial display

showSlide(currentSlide);
