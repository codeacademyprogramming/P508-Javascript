function deyishdi() {

    let raziyam = document.querySelector('#raziyam');

    let a = raziyam.checked;

    if (a == true) {
        console.log('Raziyam');
    }
    else {
        console.log('Razi deyilem');
    }

    // console.log(a);
}

function cliklendi() {
    console.log('klikledin!');
}


function messageChange(message) {
    // let message = document.querySelector('#message');
    let text = message.value;
    console.log(text);

    console.log(message);
}

function secildi(reqemler) {

    // let reqemler = document.querySelector('#reqemler');

    console.log(reqemler.value);
}


function changeColor(el) {
    console.log(el.value);

    document.body.style.backgroundColor = el.value;
}

function goWebSite(el) {
    console.log(el.value);

    window.location.href = el.value;
}
