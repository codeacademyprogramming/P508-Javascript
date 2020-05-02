// Bu gun de qarantindeyik.Kurtlar vadisine baxiriq

/*
# Value Types 
Number
boolean
string  (-/+)


# Referance Types
Array
Object


function
*/

// let reqemler = [9,8,7,6,5,4,3,20,1,32,32];

let students = [
    'Əmrah Rəhmanov',
    'İlahə Məmmədova',
    'Elmin Tagiyev',
    'Sara Əhmədova ',
    'Səftər Əkbərov',
    'Nərmin Əliyeva',
    'Orxan İbrahimov',
    'Gülbahar Məmmədova',
    'Fərid Nuruyev',
    'Kamran Orucov',
    'Elçin Əsgərov',
    'Emin İsmayılov',
    'Mahmud Yusifli',
    'Mədinə Əliyeva',
    'Cavid Mehdibəyli',
    'Orxan Hüseynli'
];

function getStudent(id) {    

    return students[id];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randId = getRndInteger(0, students.length - 1);

let student = getStudent(randId);
document.write(student);









// 
// let gunler = [
    // 'B.e',
    // 'Ç.a',
    // 'Ç',
    // 'C.a',
    // 'C',
    // 'Ş',
    // 'B'
// ];
// 
// 
// 
// let index = 3;
// console.log(`gunler[${index + 1}]=${gunler[index]}`);


// let a = 1; //Number
// let b = 2; //Number

//  let sA = String(a);
//  let sB = new String(b);

//  console.log(typeof sA);

//let value = 'true';

//value = parseInt(value);


//value = parseFloat(value);

//value = Number(value)

//value = Boolean(value);

//console.log(`Param Type: ${typeof value}\nValue: ${value}`);



// let topla = function (a, b) {
//     return a + b;
// }

// console.log(typeof topla);

// let person = {
//     'name': 'Aqil',
//     'surname': 'Agayev',
//     'age': 12
// };


// console.log(typeof person);



// let p508 = [
//     'Ad-1',
//     'Ad-2',
//     'Ad-3',
//     true
// ];

// console.log('massiv', typeof p508);

// let value = 1;

// let dogru = true;
// let yanlish = false;

// console.log(typeof dogru);
// console.log(typeof yanlish);

// let soz = 'Bu gun de qarantindeyik.Kurtlar vadisine baxiriq';
// let soz2 = `Bu gun de qarantindeyik.Kurtlar vadisine baxiriq [${soz}]`;
// let soz3 = "Bu gun de qarantindeyik.Kurtlar vadisine baxiriq";


// let tarix = new Date();


// console.log(typeof soz);


// console.log(soz);
// console.log(soz2);
// console.log(soz3);
// console.log(typeof tarix);