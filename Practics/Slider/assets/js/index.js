function nextSlide() {

    let activeSlide = document.querySelector('.active');

    let nextSlideEl = activeSlide.nextElementSibling;

    if (nextSlideEl.classList.contains('mySlides') == false) {
        nextSlideEl = activeSlide.parentElement.children[0];
    }
    console.log(nextSlideEl);

    activeSlide.classList.remove('active');
    nextSlideEl.classList.add('active');
}

function prevSlide() {
    let activeSlide = document.querySelector('.active');

    let prevSlideEl = activeSlide.previousElementSibling;

    if (prevSlideEl == null) {
        let slideLength = document.querySelectorAll('.mySlides').length;
        prevSlideEl = activeSlide.parentElement.children[slideLength - 1];
    }
    console.log(prevSlideEl);

    activeSlide.classList.remove('active');
    prevSlideEl.classList.add('active');
}