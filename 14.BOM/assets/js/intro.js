/*
alert()
confirm()
prompt()
setInterval()
setTimeout();
clearInterval()
clearTimeout();
*/

window.addEventListener('load', function () {

    let width = window.screen.width;
    let height = window.screen.height;

    console.log(`Ekran olcusu: ${width}x${height}`);


});


window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;

    let height = window.screen.height;
    let height_2 = height / 2;

    if (height_2 <= offset) {
        console.log(' Sehifeni yarilamisiniz');
    }
    console.log(offset);

});


