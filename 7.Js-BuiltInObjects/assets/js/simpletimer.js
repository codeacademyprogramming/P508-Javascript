//00:01:05

//


function useSetTimeOut() {
    // f();
    setTimeout(callbackFunction,1000);
}

function callbackFunction() {
    console.log('Run!');
}

function stopWatch(hours, minutes, seconds) {
    let _hours = 0, _minutes = 0, _seconds = 0;

    // _seconds==59

    // _minutes++;
    // _seconds==0;

    if (_seconds == 59) {
        //
    }
    else {
        ///
    }
}

function timer(elId) {
    let ul = document.querySelector(elId);

    if (ul.children.length == 0) {
        let li1 = document.createElement('li');
        ul.appendChild(li1);
        let li2 = document.createElement('li');
        ul.appendChild(li2);
        let li3 = document.createElement('li');
        ul.appendChild(li3);
    }
    let timeString = ul.getAttribute('data-time');
    console.log(timeString);//01:02:03 
    let timeStringArr = timeString.split(':');

    let hours = timeStringArr[0], minutes = timeStringArr[1], seconds = timeStringArr[2];

    let pid = setInterval(function () {
        if (seconds > 0) {
            seconds--;
        }
        else { ///saniye 0-a beraberdi
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
            else {//m=0
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        ul.children[0].textContent = toString2(hours, 2);
        ul.children[1].textContent = toString2(minutes, 2);
        ul.children[2].textContent = toString2(seconds, 2);
        // console.log(`${hours}:${minutes}:${seconds}`);

        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(pid);
        }
    },
        1000);

    ul.setAttribute('data-pid', pid);
    ul.addEventListener('click', function () {
        stopTimer(elId);
    });

    return pid;

}


//clearTimeout(pid);
function setTimeoutYoxla() {
    console.log(Date());

    let pid = setTimeout(function () {
        console.log(Date());
    }, 5000);

    console.log(pid);

}


//clearInterval(pid);
function setIntervalYoxla() {
    console.log('OutSideInterval', Date());

    let pid = setInterval(function () {
        console.log(Date());
    }, 1000);

    console.log(pid);

}


function show() {
    let digit = document.querySelector('#digit');
    if (digit != null) {
        let i = 9999;

        let pid = setInterval(function () {
            digit.textContent = i;
            i--;
        }, 1000);

        // while (i < 999999) {
        //     digit.textContent = i;
        //     i++;
        // }

        console.log('bitdi');


    }
}



// function runTimer() {
//     let ul = document.querySelector('#timer');
// timer();
//     ul.children[0].textContent = toString2(1,2);
//     ul.children[1].textContent = toString2(2,2);
//     ul.children[2].textContent = toString2(3,2);
// }

function toString2(value, length) {

    let currentlength = value.toString().length;
    length = length - currentlength;
    let result = `${'0'.repeat(length)}${value.toString()}`;
    return result;
}

function stopTimer(elId) {
    let ul = document.querySelector(elId);
    let pid = ul.getAttribute('data-pid');

    clearInterval(pid);
}