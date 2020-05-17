function createSlider(id) {
    let mySlider = document.querySelector(`#${id}`);
    mySlider.classList.add('slideshow-container');
    let images = document.querySelectorAll(`#${id} img`);

if(images.length<1)
{
    throw `${id}: - hec bir shekil qeyd olunmayib slide ucun`;
}

    images.forEach(function (myImage, index) {

        let captionText = myImage.getAttribute('data-caption')
        let mySlideDiv = document.createElement('div');
        mySlideDiv.classList.add('mySlides', 'fade');
        mySlideDiv.appendChild(myImage);

        if (index == 0) {
            mySlideDiv.classList.add('active');
        }

        let description = document.createElement('div');
        description.classList.add('description');
        mySlideDiv.appendChild(description);

        let numbertext = document.createElement('div');
        numbertext.classList.add('numbertext');
        numbertext.innerHTML = `${index + 1} / ${images.length}`;
        description.appendChild(numbertext);

        let caption = document.createElement('div');
        caption.classList.add('text');
        caption.innerHTML = captionText;
        description.appendChild(caption);

        mySlider.appendChild(mySlideDiv);
    });

    let prev = document.createElement('a');
    prev.classList.add('prev', 'nav');
    prev.innerHTML = '&#10094;';
    mySlider.appendChild(prev);


    let next = document.createElement('a');
    next.classList.add('next', 'nav');
    next.innerHTML = '&#10095;';
    mySlider.appendChild(next);

    prev.addEventListener('click', function () {
        let activeSlide = document.querySelector(`#${id} .mySlides.active`);

        let prevSlideEl = activeSlide.previousElementSibling;

        if (prevSlideEl == null) {
            let slideLength = document.querySelectorAll(`#${id} .mySlides`).length;
            prevSlideEl = activeSlide.parentElement.children[slideLength - 1];
        }
        console.log(prevSlideEl);

        activeSlide.classList.remove('active');
        prevSlideEl.classList.add('active');
    });

    next.addEventListener('click', function () {

        let activeSlide = document.querySelector(`#${id} .mySlides.active`);

        let nextSlideEl = activeSlide.nextElementSibling;

        if (nextSlideEl.classList.contains(`mySlides`) == false) {
            nextSlideEl = activeSlide.parentElement.children[0];
        }
        console.log(nextSlideEl);

        activeSlide.classList.remove('active');
        nextSlideEl.classList.add('active');
    });

    let autostart = mySlider.getAttribute('autostart');

    mySlider.slide = function () {
        if (autostart == 'on') {
            let pid = setInterval(function () {
                next.click();
            }, 1000);

            mySlider.setAttribute('data-pid', pid);
        }
    };

    mySlider.slide();

    mySlider.addEventListener('mouseover', function () {
        let pid = mySlider.getAttribute('data-pid');

        clearInterval(pid);
    });

    mySlider.addEventListener('mouseout', function () {
        mySlider.slide();
    });

}



try {
    // createSlider('mySlider');
}
catch (t) {
    let s1 = document.querySelector('#mySlider1');
    s1.style.display='none';
    console.error(t);
}
finally{
    let s1 = document.querySelector('#mySlider1');
    s1.style.display='none';
    console.log('mySlider cagirildi');
}


try {
    createSlider('mySlider2');
} catch (t) {
    let s1 = document.querySelector('#mySlider2');
    s1.style.display='none';
    console.error(t);
}
finally{
    
    console.log('mySlider2 cagirildi');
}