'use strict'

var pi = 4;

function modulCemiTap(a, b) {

    let cavab = module(a) + module(b);

    return cavab;

    //4.Closures
    function module(value) {

        //Math.abs();
        if (value < 0)
            value = -1 * value;

        return value;
    }
}


function area(radius) {
    let pi = 3; //function scope


    //global scope-den gelen pi

    let cavab = pi * Math.pow(radius, 2);

    return cavab;
}

function demo() {
    let test = 10; //default global
    // console.log(pi);
}


// function menfiyeVur(a) {
//     let b = -1 * a;

//     return b;
// }



// function clickle() {
//     //

//     let a = document.querySelector('#a').value;

//     if (isNaN(a) == true || a.length < 1) {
//         document.querySelector('#a').style.border = '1px solid red';
//         alert('duzgun reqem daxil et');
//         return;
//     }


//     let reqemA = parseInt(a);

//     let cavab = menfiyeVur(reqemA);

//     alert(`Netice: ${cavab}`);

// }