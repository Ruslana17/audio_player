const playPause = document.getElementById('play_pause');
const nextSong = document.getElementById('next_song');
const previousSong = document.getElementById('previous_song');

const audio =document.getElementById('song');
const imagePlayuer= document.getElementById('image_album');
const imageBackground = document.getElementById('image_album');

const songs =['songs/beyonce.mp3', 'songs/dontstartnow.mp3'];
const imageAlbum = ['img/lemonade.png','img/dontstartnow.png'];

let currentSongIndex=0;

function loadSong(index){
    audio.src=songs[index];
}
loadSong(currentSongIndex);

function playPauseFunstion(){
    if(audio.paused){
        audio.play();
        playPause.src="img/pause.png";
    } else{
        audio.pause();
        playPause.src="img/play.png";
    }
}

playPause.addEventListener('click', playPauseFunstion);


