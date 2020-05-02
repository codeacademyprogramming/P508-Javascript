// alert('ok');


let hesablaButton = document.querySelector('#hesabla');

hesablaButton.onclick = function (e) {
    let a = document.querySelector('#a'); //input a
    let b = document.querySelector('#b'); //input b
    let operation = document.querySelector('#operation');

    let value1 = parseInt(a.value);
    let value2 = parseInt(b.value);
    let emeliyyat = operation.value;

    // console.log(value1);
    // console.log(value2);
    // console.log(emeliyyat);

    // let cavab = value1 + value2;
    // cavab = value1 - value2;
    // cavab = value1 * value2;
    // cavab = value1 / value2;

    let cavab;

    switch (emeliyyat) {
        case '+': {
            cavab = value1 + value2;
            break;
        }
        case '-': {
            cavab = value1 - value2;
            break;
        }
        case '*': {
            cavab = value1 * value2;
            break;
        }
        case '/': {
            if (value2 == 0) {
                cavab = "0-a bolmek olmaz!";
            }
            else
                cavab = value1 / value2;
            break;
        }
        default:{
            break;
        }
    }

    // if (emeliyyat == '+') {
    //     cavab = value1 + value2;
    // }
    // else if (emeliyyat == '-') {
    //     cavab = value1 - value2;
    // }
    // else if (emeliyyat == '*') {
    //     cavab = value1 * value2;
    // }
    // else {
        // if (value2 == 0) {
        //     cavab = "0-a bolmek olmaz!";
        // }
        // else
        //     cavab = value1 / value2;
    // }

    // let result = `${value1} ${emeliyyat} ${value2} = ${cavab}`;

    let history = document.querySelector('#history');

    let li = document.createElement('li');

    li.textContent = `${value1} ${emeliyyat} ${value2} = ${cavab}`;

    history.appendChild(li);
};