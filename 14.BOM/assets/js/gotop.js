window.addEventListener('scroll', function (e) {


    let a = window.pageYOffset;


    let btn = document.querySelector('a.gotop');

    if (a >= 50) {
        btn.classList.add('active');
    }
    else {
        btn.classList.remove('active');
    }



});