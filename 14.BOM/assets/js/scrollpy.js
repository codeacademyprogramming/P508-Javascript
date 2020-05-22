window.addEventListener('scroll', function () {

    let scrollOffset = window.pageYOffset + 48;

    let home = document.querySelector('#home');
    let services = document.querySelector('#services');
    let about = document.querySelector('#about');

    let allActivelinks = document.querySelectorAll('header a.active');

    allActivelinks.forEach(function (el) {
        el.classList.remove('active');
    });



    console.log(scrollOffset, about.offsetTop);
    if (about.offsetTop <= scrollOffset) {
        let id = about.getAttribute('id');

        document.querySelector(`[href="#${id}"]`).classList.add('active');
    }
    else if (services.offsetTop <= scrollOffset) {
        let id = services.getAttribute('id');

        document.querySelector(`[href="#${id}"]`).classList.add('active');
    }
    else if (home.offsetTop <= scrollOffset) {
        let id = home.getAttribute('id');

        document.querySelector(`[href="#${id}"]`).classList.add('active');


    }


    console.log();

});