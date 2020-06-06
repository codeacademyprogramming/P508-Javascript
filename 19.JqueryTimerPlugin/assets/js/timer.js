let sound = new Audio('assets/sounds/beep.mp3');

function timer(id) {
    let myTimer = document.querySelector(`#${id}`);

    let hourEl = myTimer.children[0];
    let minuteEl = myTimer.children[2];
    let secondEl = myTimer.children[4];
    
    let time = myTimer.getAttribute('data-time');
    let timeParts = time.split(':');

    let hours = timeParts[0];
    let minutes = timeParts[1];
    let seconds = timeParts[2];

    if (!isValid(hours) || !isValid(minutes) || !isValid(seconds)) {
        return;
    }

    myTimer.classList.add('running');

    secondEl.textContent = format(seconds);
    minuteEl.textContent = format(minutes);
    hourEl.textContent = format(hours);


    let pid = setInterval(function () {

        if (seconds > 0) {
            seconds--;
        }
        else if (minutes > 0) {
            seconds = 59;
            minutes--;
        }
        else if (hours > 0) {
            minutes = 59;
            seconds = 59;
            hours--;
        }
        else {
            // sound.play();
            myTimer.classList.remove('running');
            clearInterval(pid);
        }

        secondEl.textContent = format(seconds);
        minuteEl.textContent = format(minutes);
        hourEl.textContent = format(hours);
    }, 1000);

}

/*
1,3,5,
13,15,24
*/
function format(val) {

    // if (!isNaN(val))
    //     val = parseInt(val);

    if (val < 10)
        return `0${parseInt(val)}`;

    return val;
}

function isValid(val) {
    if (val == null)
        return false;

    if (isNaN(val))
        return false;

    return true;
}


timer('timer1');
timer('timer2');