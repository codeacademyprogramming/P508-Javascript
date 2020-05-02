/*
   Name:   
   Surname: 
   Gender:
*/

// let student1 = new Object();
// student1.name = 'Əmrah';
// student1.surname = 'Rəhmanov';
// student1.gender = 'Kişi';

// console.log(student1.surname);

// let student2 = new Object();
// student2.name = 'Emin';
// student2.Surname = 'İsmayılov';
// student2.gender = 'Kişi';

// console.log(student2.surname);

function Student(name, surname, gender) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;

    this.fullName = function () {
        return `${this.surname} ${this.name}`;
    }
}

let s1 = new Student('Əmrah', 'Rəhmanov', 'Kişi');
console.log(s1.fullName());
let s2 = new Student('Emin', 'İsmayılov', 'Kişi');
console.log(s2);

//literal constructor

let s3 = {
    name: 'Kerim',
    surname: 'Agayev',
    gender: 'Kisi',
    fullName: function () {
        return `${this.surname} ${this.name} ${this.name}`;
    }
};

let s4 = {
    name: 'Kerim',
    surname: 'Agayev',
    gender: 'Kisi'
};

console.log(s3.fullName());




