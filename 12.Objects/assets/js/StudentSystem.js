// let students = [
//     'Əmrah Rəhmanov',
//     'İlahə Məmmədova',
//     'Elmin Tagiyev',
//     'Sara Əhmədova ',
//     'Səftər Əkbərov',
//     'Nərmin Əliyeva',
//     'Orxan İbrahimov',
//     'Gülbahar Məmmədova',
//     'Fərid Nuruyev',
//     'Kamran Orucov',
//     'Elçin Əsgərov',
//     'Emin İsmayılov',
//     'Mahmud Yusifli',
//     'Mədinə Əliyeva',
//     'Cavid Mehdibəyli',
//     'Orxan Hüseynli'
// ];

function Student(name, surname, gender) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;

    this.fullName = function () {
        return `${this.surname} ${this.name}`;
    }
}

let p508 = Array();
const male = 'Kişi', female = 'Qadın';

let p1 = new Student('Əmrah', 'Rəhmanov', male);
p508.push(p1);

let p2 = new Student('İlahə', 'Məmmədova', female);
p508.push(p2);

let p3 = new Student('Sara', 'Əhmədova', female);
p508.push(p3);



// console.log(p508);

// for (let index = 0; index < p508.length; index++) {
//     const student = p508[index];

//     console.log(student.fullName());
// }

//select only females
let filtered = p508.filter(function (student, index, arr) {
    return student.gender == male;
});

console.log(filtered);
