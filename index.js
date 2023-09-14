const playPause = document.getElementById('play_pause');
const nextSong = document.getElementById('next_song');
const previousSong = document.getElementById('previous_song');

const audio =document.getElementById('song');
const imagePlayuer= document.getElementById('image_album');
const imageBackground = document.getElementById('backround-image');

const songs =['songs/beyonce.mp3', 'songs/dontstartnow.mp3'];
const imageAlbum = ['img/lemonade.png','img/dontstartnow.png'];

let currentSongIndex=0;

function loadSong(index){
    audio.src=songs[index];
    imagePlayuer.src=imageAlbum[index];
    imageBackground.src=imageAlbum[index];
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


nextSong.addEventListener('click', () =>{
    currentSongIndex=(currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
})


previousSong.addEventListener('click', ()=>{
    currentSongIndex=(currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
})

/*audio.addEventListener('ended', () =>{
    currentSongIndex=(currentSongIndex + 1)% songs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
})*/
