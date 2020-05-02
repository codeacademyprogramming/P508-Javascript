function createDigit() {
    let li = document.createElement('li');

    li.classList.add('digit');

    let ledTop = document.createElement('span');
    ledTop.classList.add('led-top');
    li.appendChild(ledTop);

    let ledCenter = document.createElement('span');
    ledCenter.classList.add('led-center');
    li.appendChild(ledCenter);

    let ledBottom = document.createElement('span');
    ledBottom.classList.add('led-bottom');
    li.appendChild(ledBottom);

    let ledLeftTop = document.createElement('span');
    ledLeftTop.classList.add('led-left-top');
    li.appendChild(ledLeftTop);

    let ledLeftBottom = document.createElement('span');
    ledLeftBottom.classList.add('led-left-bottom');
    li.appendChild(ledLeftBottom);

    let ledRightTop = document.createElement('span');
    ledRightTop.classList.add('led-right-top');
    li.appendChild(ledRightTop);

    let ledRightBottom = document.createElement('span');
    ledRightBottom.classList.add('led-right-bottom');
    li.appendChild(ledRightBottom);


    return li;
}

function createSplitter() {
    let li = document.createElement('li');
    li.classList.add('splitter');
    return li;
}


function initTimer() {
    let countdown = document.querySelector('#countdown');

    let d1 = createDigit();
    let d2 = createDigit();

    let s1 = createSplitter();

    let d3 = createDigit();
    let d4 = createDigit();


    let s2 = createSplitter();

    let d5 = createDigit();
    let d6 = createDigit();

    countdown.appendChild(d1);
    countdown.appendChild(d2);
    countdown.appendChild(s1);
    countdown.appendChild(d3);
    countdown.appendChild(d4);
    countdown.appendChild(s2);
    countdown.appendChild(d5);
    countdown.appendChild(d6);

    return countdown;
}






let timer = initTimer();

function setTimer(timer) {

    //>0   
    //==0  minut-1  59
    //m==0    m:59 s:59

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


    console.log(`${hours}:${minutes}:${seconds}`);
    //timer
}

let minutes = 1, hours = 1, seconds = 1;
function runTimer() {
    let prosessKodu = setInterval(function () {
        setTimer(timer, hours, minutes, seconds);

    }, 1000);

    console.log(prosessKodu);
}
