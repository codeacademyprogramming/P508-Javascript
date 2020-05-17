function createNewElement(el) {
    console.log(el.target);
    let li = document.createElement('li');

    li.innerHTML = Date();

    let ul1 = document.querySelector('#ul1');
    let ul2 = document.querySelector('#ul2');

    ul1.appendChild(li);

    ul2.appendChild(li.cloneNode(true));
}

function myInfo() {
    console.log('Hello Javascript');
}

let btn = document.querySelector('#btnAppend');

btn.style.textDecoration = 'underline';
// btn.onclick = myInfo;
// btn.onclick = createNewElement;


// btn.addEventListener('click', createNewElement);
// btn.addEventListener('click', myInfo);

//  btn.removeEventListener('click', createNewElement);