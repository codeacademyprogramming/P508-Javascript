let p508 = [];//Array();

function frameLoad(e) {
    /*
      let listBulk = JSON.stringify(p508);
     localStorage.setItem('p508', listBulk);
    */
    let listBulk = localStorage.getItem('p508');

    if (listBulk != null) {
        p508 = JSON.parse(listBulk);
        loadStudents(p508);
    }


}

// frameLoad();

window.addEventListener('load', frameLoad);


function Student(name, surname, gender) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;

    // this.fullName = function () {
    //     return `${this.surname} ${this.name}`;
    // }
}

function fullName(el) {
    return `${el.surname} ${el.name}`;
}


const btnAddPerson = document.querySelector('#addPerson');
const btnSelectMales = document.querySelector('#selectMales');
const btnSelectFemales = document.querySelector('#selectfemales');
const btnClearSelection = document.querySelector('#clearSelection');

const studentList = document.querySelector('#students');

function getInputValue(id) {
    return document.querySelector(`#${id}`).value;
}


btnAddPerson.addEventListener('click', function (e) {

    let name = getInputValue('name');
    let surname = getInputValue('surname');
    let gender = getInputValue('gender');

    // console.log(name, surname, gender);

    let student = new Student(name, surname, gender);

    p508.push(student);

    let listBulk = JSON.stringify(p508);
    localStorage.setItem('p508', listBulk);
    // console.log(student);

    loadStudents(p508);

});


function loadStudents(p508) {
    studentList.innerHTML = '';

    p508.forEach(function (student, index) {
        let stuli = document.createElement('li');
        stuli.setAttribute('data-id', index);

        stuli.textContent = fullName(student);

        studentList.appendChild(stuli);
    });
}


