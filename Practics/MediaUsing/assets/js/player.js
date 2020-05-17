function mp3(name,author,path)
{
this.name=name;
this.author=author;
this.path=`assets/sounds/${path}`;
}


let musics = Array();
musics.push(new mp3('Music-1','Rihanna','beep.mp3'));
musics.push(new mp3('Music-1','Rihanna','beep.mp3'));
musics.push(new mp3('Music-1','Rihanna','beep.mp3'));

musics[0].path