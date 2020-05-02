const x = 5;

const _fullName = function () {
    // console.log('Hi!');
    return `${this.surName} ${this.name} ${this.patronymic}`;
}

/*
product


>> Samsung Galaxy A51 DS (SM-A515) 128GB BLACK


name:   Samsung Galaxy A51 DS (SM-A515) 
memory: 128GB 
color:  BLACK

product.fullInfo()
*/

// let insan1 = ['Shamil', 'Eliyev', '20'];

// console.log(insan1);
// console.log(insan1[1]);
// console.log(insan1[2]);

// let insan2 = ['Quliyev', 'Aga', '21'];
// console.log(insan2[0]);
// console.log(insan2[1]);
// console.log(insan2[2]);


// //object
// let person1 = new Object();
// //person1 -> instance
// person1.name = 'Aga';
// person1.surName = 'Quliyev';
// person1.age = 20;


// console.log(person1.name);

let male = new Object();
male.id = 1;
male.name = "Kişi";

let person2 = Object();
//person2 -> instance
person2.name = 'Emin'; //property
person2.surName = 'Quliyev';//property
person2.patronymic = 'Ilkin';
person2.age = 19;//property
person2.gender = male;
person2.skills = ['Html', 'Css', 'Javascript'];

person2.fullName = _fullName;

console.log(person2.fullName());
// console.log(`${person2.surName} ${person2.name} ${person2.patronymic}`);


let person3 = Object();
//person2 -> instance
person3.name = 'Valeh'; //property
person3.surName = 'Agayev';//property
person3.patronymic = 'Rafiq';

person3.fullName = _fullName;

// person3.fullName = function () {
//     // console.log(this);
//     return `${person3.surName} ${person3.name} ${person3.patronymic}`;
// };



console.log(person3.fullName());
// console.log(`${person3.surName} ${person3.name} ${person3.patronymic}`);









// a = 2;

// let saat1 = new Object();

// saat1.hours = 2;
// saat1.minutes = 12;
// saat1.seconds = 23;

// console.log(saat1);


const fullInfo =function(){
    return `${this.name} ${this.memory} ${this.color}`;
}

let product = new Object();
product.name='Samsung Galaxy AS1 DS';
product.memory='128GB';
product.color='BLACK';

product.fullInf = fullInfo;

console.log(product.fullInf())
