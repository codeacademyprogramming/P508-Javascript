function Music(name, author, link) {
    this.name = name;
    this.author = author;
    this.link = link;
}

let music1 = new Music('Remix-1', 'Developer Group', 'assets/sounds/1.mp3');
let music2 = new Music('Remix-2', 'Developer Group-2', 'assets/sounds/2.mp3');


let musics = [music1, music2];

let playlist = document.querySelector('#playlist');
musics.forEach(function (mp3, index) {

    let li = document.createElement('li');

    li.innerHTML = `${mp3.name}<br>${mp3.author}`;

    playlist.appendChild(li);

    li.addEventListener('click', function () {

        let selectedMp3 = musics[index];

        console.log(selectedMp3);
        let audio = new Audio(selectedMp3.link);
        audio.play();

        audio.pause();

    });
});




let btn1 = document.querySelector('#btn1');
//request
btn1.addEventListener('click', function (e) { //x

    console.log('birinci btn clicklendi');
});
console.log('End of First Try');






try {
    let btn2 = document.querySelector('#btn2');

    btn2.addEventListener('click', function (e) {
        console.log('ikinci btn clicklendi');
    });
} catch (error) {
    //
}


console.log('End Of Script');


