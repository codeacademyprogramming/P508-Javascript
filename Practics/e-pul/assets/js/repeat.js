'use strict';
//global scope


p = 10;

console.log(p);

let a = 5;
const pi = 3.14;

console.log(a);

function myFunction() {
    //function scope
    let a = 4;

    // let x = myFunc1();

    a = 14; //assign global scope eger funksiyada let ile declare elemesek
    console.log(a);

    while (1 == 2) {
        let a = 112;//block scope
    }
}

function myFunc1() {
    let a = 10;
    return a;
}

if (1 == 1) {
    let a = 12;//block scope
}

while (1 == 2) {
    let a = 112;//block scope
}


