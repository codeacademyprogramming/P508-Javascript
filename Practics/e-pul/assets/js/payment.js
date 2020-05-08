'use strict';

let provider = sessionStorage.getItem('provider');

if (provider == null) {
    window.location.href = 'index.html';
}

const providerInfo = document.querySelector('#providerInfo');

providerInfo.textContent = provider;

// console.log(providerInfo);

const btnPay = document.querySelector('#btnPay');
let pid = sessionStorage.getItem('providerId');

if (pid != 4) {
    document.querySelector('#txtCardNo').parentElement.style.display = 'none';
    document.querySelector('#txtMonth').parentElement.style.display = 'none';
    document.querySelector('#txtYear').parentElement.style.display = 'none';
    document.querySelector('#txtSecretNo').parentElement.style.display = 'none';
}
else {
    document.querySelector('#txtNumber').parentElement.style.display = 'none';
}

btnPay.addEventListener('click', function () {
    const txtNumber = document.querySelector('#txtNumber');
    const txtAmount = document.querySelector('#txtAmount');
    const txtCardNo = document.querySelector('#txtCardNo');
    const txtMonth = document.querySelector('#txtMonth');
    const txtYear = document.querySelector('#txtYear');
    const txtSecretNo = document.querySelector('#txtSecretNo');



    //txtNumber.value

    //Payment
    let payment = {
        number: txtNumber.value,
        amount: parseInt(txtAmount.value),
        cardNo: txtCardNo.value,
        month: txtMonth.value,
        year: txtYear.value,
        secretNo: txtSecretNo.value,
        providerId: pid
    };

   

    console.log(payment);

    let balance = localStorage.getItem('balance');

    if (balance == null) {
        balance = 0;
    }

    if (pid == 4) {
        balance = parseInt(balance) + payment.amount;
    }
    else {
        if (parseInt(balance) < payment.amount) {
            alert('Balansiniz kifayet deyil!');
            return;
        }

        balance = parseInt(balance) - payment.amount;
    }



    localStorage.setItem('balance', balance);


    window.location.href = 'index.html';

});