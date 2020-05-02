// function toString2(value, length) {

//     let currentlength = value.toString().length;
//     length = length - currentlength;
//     let result = `${'0'.repeat(length)}${value.toString()}`;

//     return result;
// }

// String.prototype.toString2 =
//     function (length) {

//         let value = this;

//         let currentlength = value.toString().length;
//         length = length - currentlength;
//         let result = `${'0'.repeat(length)}${value.toString()}`;

//         return result;
//     }

//extensions
Number.prototype.toString2 =
    function (length) {

        let value = this;

        let currentlength = value.toString().length;
        length = length - currentlength;
        let result = `${'0'.repeat(length)}${value.toString()}`;

        return result;
    }



let currentTime = document.querySelector('#currentTime');


let pid = setInterval(function () {

    let currentDateTime = new Date();

    /*
    gun
    ay
    il
    
    saat
    deqiqe
    saniye
    */

    let day = currentDateTime.getDate();
    let month = currentDateTime.getMonth() + 1;
    let year = currentDateTime.getFullYear();

    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    let seconds = currentDateTime.getSeconds();


    let result = `${day.toString2(2)}.${month.toString2(2)}.${year} ${hours.toString2(2)}:${minutes.toString2(2)}:${seconds.toString2(2)}`;

    currentTime.innerHTML = result;
}, 3000);

// let x = f();




let metn = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo facilis quisquam voluptatum, quos repellendus iste excepturi quaerat odio dolorum saepe molestias quod sequi officiis neque, cupiditate necessitatibus fugiat non.'

let letter1 = 'e';
let letter2 = 'd';

let letter1Count = 0;
let letter2Count = 0;

let mentArr = metn.split('').filter(function (value, index, arr) {

    return [',', '.', ' '].indexOf(value) == -1;
});

mentArr.forEach(function (letter) {

    if (letter.toUpperCase() == letter1.toUpperCase()) {
        letter1Count++;
    }

    if (letter.toUpperCase() == letter2.toUpperCase()) {
        letter2Count++;
    }

});

console.log(`${letter1} (${letter1Count})\n${letter2} (${letter2Count})`);
console.log((letter1Count / letter2Count).toFixed(3));


let soz = 'programmer';


let a1 = soz.split('')

a1.filter(function (value, index, arr) {

    if (index % 2 != 0) {
        arr[index] = value.toUpperCase();
    }
    else {
        arr[index] = value.toLowerCase();
    }
    return true;
});

console.log(a1);
