window.addEventListener('load', yuklendi());


function yuklendi() {

     window.sound=new Audio('assets/sounds/beep.mp3');

    let btn = document.querySelector('#playSound');

    btn.addEventListener('click', function () {

        let ses = document.querySelector('#mySound');
        mySound.play();


    });


    let pauseBtn = document.querySelector('#pauseSound');

    pauseBtn.addEventListener('click', function () {

        let ses = document.querySelector('#mySound');
        mySound.pause();


    });

    let btnplaySound2 = document.querySelector('#playSound2');

    btnplaySound2.addEventListener('click', function () {

        // let sound = new Audio('assets/sounds/beep.mp3');

        try {
            window.sound.play();
        } catch (error) {
            
        }


    });
}