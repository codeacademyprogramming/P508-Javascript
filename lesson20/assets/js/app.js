function timer(timerId, hours, minutes, seconds) {

    function loop() {
        if (seconds > 0)
            seconds--;
        else {
            if (minutes > 0) {
                seconds = 59;
                minutes--;
            }
            else if (hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            }
        }

        document.querySelector(`#${timerId} > .hours`).innerHTML = (hours).toString2(2);
        document.querySelector(`#${timerId} > .minutes`).innerHTML = (minutes).toString2(2);
        document.querySelector(`#${timerId} > .seconds`).innerHTML = (seconds).toString2(2);

        if (hours == 0 && minutes == 0 && seconds == 0) {
            clearInterval(timerPtr);
            document.querySelector(`#${timerId}`).classList.remove('running');
            document.querySelector(`#${timerId}`).classList.remove('paused');
        }
    }

    loop();
    
    document.querySelector(`#${timerId}`).classList.add('running');
    var timerPtr = setInterval(loop, 1000);

    return timerPtr;
}

Number.prototype.toString2 = function (length) {
    length = length - this.toString().length;
    if (length < 0)
        length = 0;

    return `${'0'.repeat(length)}${this}`;
};