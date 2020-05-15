function myFocus(el) {
    console.log('fokuslandi');

    el.parentElement.classList.add('active');
}

function myBlur(el) {
    console.log('fokusdan cixdi');

    if (el.value.length < 1) {

        el.parentElement.classList.remove('active');
    }
}

//----------------------------------
function myFocus2() {
    let el = this;

    console.log('fokuslandi');

    el.parentElement.classList.add('active');
}

function myBlur2() {
    let el = this;

    console.log('fokusdan cixdi');

    if (el.value.length < 1) {

        el.parentElement.classList.remove('active');
    }
}

let inp =
    document.querySelector('#x1 .form-control');

//element.event=function
//function binding
inp.onfocus = myFocus2;
inp.onblur = myBlur2;



// function User(name,surname)
// {
//     this.name=name;
//     this.surname=surname;


//     this.fullName = function(){
//         return `${this.name} ${this.surname}`;
//     }
// }

// let u1 = new User('UserName-1','User Surname-1');

// u1.fullName()
