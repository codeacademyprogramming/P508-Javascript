function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.showInfo = function () {
        return `${this.name} ${this.surname}`;
    };
}

let execButton = document.querySelector('#showInfo');

execButton.addEventListener('click', gosterFn);

function gosterFn(e) {
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = parseInt(document.querySelector('#age').value);
    let p = new Person(name, surname, age);
    let monitor = document.querySelector('#monitor');
    monitor.innerHTML = p.showInfo();
}