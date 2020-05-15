function kursorElementUzerineGelende(arguments) {
    let daire = document.querySelector('.circle');

    daire.innerHTML = 'Mause geldi';
    console.log(`over: x:${arguments.x},y:${arguments.y}`, arguments);
}

function kursorElementdengetdi(e) {
    let daire = document.querySelector('.circle');

    daire.innerHTML = 'Mause getdi';

    console.log('out: ', e.target);
}

function clicklendi()
{
    console.log('klikledin!');
}

function rotateTo()
{
    let square = document.querySelector('.square');

    square.classList.add('r45');
}

function rotateBack()
{
    let square = document.querySelector('.square');

    square.classList.remove('r45');
}