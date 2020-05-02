function clickButton() {
    // let a = parseInt(prompt('a deyiseninin qiymetini daxil et!', 5));
    // let b = parseInt(prompt('b deyiseninin qiymetini daxil et!', 15));

    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;


    if (isNaN(a)) {
        document.querySelector('#ekran').innerHTML = `'${a}' - bir eded deyil`;
        return;//
    }

    if (isNaN(b)) {
        document.querySelector('#ekran').innerHTML = `'${b}' - bir eded deyil`;
        return;
    }
    
    a = parseInt(a);
    b = parseInt(b);

    let cavab = topla(a, b);

    document.querySelector('#ekran').innerHTML = `Cavab : ${cavab}   `;
    // alert(`Cavab : ${cavab}   `)
}


function topla(value1, value2) {
    let value3 = value1 + value2;

    return value3;
}

// let a = parseInt(prompt('a deyiseninin qiymetini daxil et!',5));
// let b = parseInt(prompt('b deyiseninin qiymetini daxil et!',15));

// let cavab = topla(a, b);

// console.log(cavab);


// a = parseInt(prompt('a deyiseninin qiymetini daxil et!'));
// b = parseInt(prompt('b deyiseninin qiymetini daxil et!'));

// cavab = topla(a, b);

// console.log(cavab);






// let ageParam = parseInt(prompt('Yashinizi daxil edin'));

// let cavab = allowToGame(ageParam);  //geri cavab qaytaran funksiya
// console.log(ageParam,cavab);

// if(cavab==true)
// {
//     document.write('Oyuna xosh gelmisiniz!');
// }
// else
// {
//     document.write('boyu sora gel!');
// }


function allowToGame(age) {

    if (age >= 18)
        return true;//
    else
        return false;
}


// let deyer = prompt('musbet deyer daxil edin');

// if (deyer < 0) {
//     alert('Yalniz musbet deyer daxil etmek olar!');
// }
// else {
//     kokAlmaq(deyer);
// }

// let cavab = Math.sqrt(4);


function kokAlmaq(a) {
    let b = Math.sqrt(a);
    //alert(`Cavab : ${b}   `); //Template Literal    ``


    //alert('KvadratKok[' + a + ']=' + b);
    alert(`KvadratKok[${a}]=${b}`);

    //alert('Cavab: ' + b+ 'ozun necesen falan filan' );
}



// let param1 = prompt('eded daxil ele');

// task1();
// calc(param1); //funksiyani cagirmaq




function task1() {

    let a = prompt('4reqemli eded daxil ele');
    a = 70000 + a;
    a = a * 10 + 4;

    console.log(a);
}

//funksiyani teyin etmek
function calc(a) {
    a = Math.pow(a, 2);

    alert(a);
}
