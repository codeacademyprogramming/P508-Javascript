let password = document.querySelector('#password');
let passwordInfo = document.querySelector('#password-info');
// password.onkeydown = myKeyDown;

// password.addEventListener('keydown', myKeyDown);
// password.addEventListener('keyup', myKeyDown);
// password.addEventListener('keypress', myKeyDown);


/*
   @
*/
function myPaste(e) {
    e.preventDefault();
    console.log(e);
}

function myKeyPress(e) {
    console.log(`myKeyPress/ Input Value: ${e.target.value}`, e);
}

function myKeyUp(e) {
    console.log(`myKeyUp/ Input Value: ${e.target.value}`, e);
}

function myKeyDown(e) {

    console.log(`myKeyDown/ Input Value: ${e.target.value}`, e);

    let allowedKeys = [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        8, //backspace
        46,
        13, //enter
        39, 37
    ];

    let key = e.which;
    let index = allowedKeys.indexOf(key);

    if (index == -1) {
        e.preventDefault();
        // return;
    }

    // console.log(e);
    // e.preventDefault();

    passwordInfo.innerHTML = passwordInfo.innerHTML += ',' + e.which + ' &#128512;';
}




//---------------------

window.addEventListener('load', onLoad);

function onLoad() {
    //sehife yuklenib bitenden sonra calishacaq
    console.log('sehife yuklenib bitenden sonra calishacaq');


    let email = document.querySelector('#email');

    email.addEventListener('blur', function (e) {

        let val = e.target.value;
        let email_info = document.querySelector('#email_info');
        email_info.innerHTML = '';

        //@
        if (val.length > 0) {


            //@test@mail.ru@
            //-1
            //0
            //length-1
            //problem


            let index = val.indexOf('@');
            //0,1,2
            let denyIndexes = [-1, 0, val.length - 1];

            if (denyIndexes.indexOf(index) != -1) {
                email_info.innerHTML = 'Dogru E-mail addressi deyil';

                e.target.focus();
            }

        }

    });

    email.addEventListener('keydown', function (e) {
        console.log(e);
        let el = e.target;
        // let nextElement = el.nextElementSibling;
        let email_info = document.querySelector('#email_info');

        // console.log(nextElement);


        if (e.shiftKey == true) {
            switch (e.which) {
                case undefined:
                case 16:
                case 50:
                    break;

                default:
                    email_info.innerHTML = `Shift+'${e.key}'-simvola icaze verilmir`;
                    e.preventDefault();
                    break;
            }
        }

        console.log(`CTRL: ${e.ctrlKey}, Shift: ${e.shiftKey}, ${e.which}`)

        // let infoId = el.getAttribute('aria-target');

        // if (infoId != null && infoId.length > 0) {

        //     infoId = `${el.id}_${infoId}`;

        //     if (nextElement.id != infoId) {
        //         nextElement = document.createElement('em');
        //         nextElement.id = infoId;

        //         el.parentElement.insertBefore(nextElement, el.nextElementSibling)
        //     }
        //     nextElement.innerHTML = e.keyCode;
        // }


        console.log('');

    });
}



function zamanGoster() {
    setTimeout(function () {


        display.innerHTML = Date();

    }, 1000);
}