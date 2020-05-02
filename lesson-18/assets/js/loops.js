//1-15-ə kimi ədədləri hasilini tapmaq

let hasil = 1;//6
for (let eded = 1; eded <= 15; eded++) {
    hasil *= eded;
}

console.log(hasil);

//let a = [0, 11, 43, 121, 55, 90];

//massivi doldurur
// for (let index = 0; index < 10; index++) {

//     a[index] = getRndInteger(100, 300);
// }

// // massivi cap edir
// for (let i = 0; i < a.length; i++) {
//     let el = a[i];

//     console.log(el);

// }

// 11 - 50   cut ededleri cap elemek

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let index = 0; index < a.length - 1; index++) {

//     if ((index + 1) % 2 == 0) {
//         console.log(a[index]);
//     }

// }





// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }