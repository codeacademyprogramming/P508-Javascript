// const phonePattern = /\d{3}-\d{3}-\d{2}-\d{2}/g;
const docIdPattern =new RegExp(/^(\w{3})(\d{8})$/g);
const alpha = /^[a-zA-Z]+$/g;



console.log(typeof docIdPattern);

function checkInput()
{
    let word = document.querySelector('#secretword');

    // console.log(alpha.test(word.value));
    if(alpha.test(word.value))
    {
        word.classList.add('success');
        word.classList.remove('error');
    }
    else
    {
        word.classList.add('error'); 
        word.classList.remove('success'); 
    }
}


// let result = docIdPattern.test('AZE0000000');
let result = docIdPattern.exec('AZE00000000');

if(result)
{
    console.log(`Series: ${result[1]}\nNo: ${result[2]}`)
}

console.log(result);

let userForm = document.querySelector('#userForm');


userForm.addEventListener('submit', function (e) {


    let gradient = document.querySelectorAll('[name=gradient]');

    //rest parameters
    let selected = [...gradient].filter(function (e) {
        return e.checked == true;
    });

    if(selected.length==0)
    {
        choosen.classList.add('error');
    }
    else
    choosen.classList.remove('error');

    let genderId = document.querySelector('#genderId');
    genderId.classList.remove('error');
    console.log(genderId.value);
    if (genderId.value.length == 0) {
        e.preventDefault();

        genderId.classList.add('error');
        genderId.focus();
    }




    let userName = document.querySelector('#userName');
    userName.classList.remove('error');

    if (userName.hasAttribute('required')) {
        if (userName.value.length == 0) {
            e.preventDefault();

            userName.classList.add('error');
            userName.focus();
        }
    }


    // let phone = document.querySelector('#phone');
    // userName.classList.remove('error');

    // if (phone.hasAttribute('required')) {
    //     if (phone.value.length == 0) {
    //         e.preventDefault();

    //         phone.classList.add('error');
    //         phone.focus();
    //     }
    //     else if (/\d{3}-\d{3}-\d{2}-\d{2}/g.test(phone.value) == false) {
    //         e.preventDefault();
    //         console.log('error burdadir',phone.value);
    //         phone.classList.add('error');
    //         phone.focus();
    //     }
    // }

    let age = document.querySelector('#age');
    age.classList.remove('error');

    if (age.hasAttribute('required')) {
        if (age.value.length == 0) {
            e.preventDefault();

            age.classList.add('error');
            age.focus();
        }
        else if (/^\d+$/g.test(age.value) == false) {
            e.preventDefault();
            console.log('error burdadir', age.value);
            age.classList.add('error');
            age.focus();
        }
    }

    e.preventDefault();

});

let userName = document.querySelector('#userName');

userName.addEventListener('keyup', function (e) {
    userName.classList.remove('error');

    if (userName.hasAttribute('required')) {
        if (userName.value.length == 0) {
            e.preventDefault();

            userName.classList.add('error');
            userName.focus();
        }
    }
});




