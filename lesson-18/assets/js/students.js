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

let students = [];

function addStudent() {
    let name = document.querySelector('#student').value;

    if (name.length < 1)
        return;
        
    students.push(name);




    let list = document.querySelector('#telebeler');

    let li = document.createElement('li');
    li.innerHTML = name;

    list.appendChild(li);
}

// function showStudents()
// {

// }

function addRandStudent() {
    let list = document.querySelector('#telebeler');

    let randId = getRndInteger(0, students.length - 1);
    let studentName = students[randId];

    let li = document.createElement('li');
    li.innerHTML = studentName;

    list.appendChild(li);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}