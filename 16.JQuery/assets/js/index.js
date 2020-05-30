$(document).ready(function () {


    console.log('Sened yuklendi');



    // let btn = document.querySelector('#myBtn');

    // btn.addEventListener('click', function () {


    //     console.log('kliklendi');

    // });



    // $('#myBtn').on('click', function () {


    //     console.log('kliklendi');

    // });


    // $('#myBtn').click(function (e) {


    //     console.log('kliklendi-2');
    //     console.log(e);

    // });


    // let li_s = document.querySelectorAll('#js li');

    // li_s.forEach(function (param) {
    //     param.addEventListener('click', function () {
    //         alert('Salam Jquery');
    //     });
    // });

    $('#js li').click(function (e) {
        alert('Salam Jquery');
    });



    /*
    #idName
    .className
    tagName  (p,a,h1)

    :checked+label


    $('')


    */



    // let myHead = document.querySelector('.head-1');


    // myHead.style.backgroundColor = 'teal';
    // myHead.style.color = '#ffffff';





    // $('.head-1').css('background-color', '#cccccc');


    // let o = {

    //     'background-color': 'teal',
    //     color: '#ffffff'
    // };



    // $('.head-1').css(o);
    $('.head-1').css({
        'background-color': 'teal',
        color: '#ffffff',
        transition: 'all 0.2s'
    });

    let color = $('.head-1').css('color');
    console.log(color);





});
