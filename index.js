const playPause = document.getElementById('play_pause');
const nextSong = document.getElementById('next_song');
const previousSong = document.getElementById('previous_song');

const audio =document.getElementById('song');
const imagePlayer= document.getElementById('image_album');
const imageBackground = document.getElementById('backround-image');

const nameArtist = document.getElementById('name_artist'); 
const titleSong = document.getElementById('title_song');

const currentTimes = document.getElementById('current-time');
const durationTime = document.getElementById('duration-time');

/*const songs =['songs/beyonce.mp3', 'songs/dontstartnow.mp3'];
const imageAlbum = ['img/lemonade.png','img/dontstartnow.png'];*/


 
  

const listSongs=[
    {
    artist: 'Beyonce',
    title: "Don't Hurt Yourself", 
    file:  "songs/beyonce.mp3",
    image: "img/lemonade.png",
  },

{ 
    artist: 'Dua Lipa',
    title: "Don't Start Now",
    file: "songs/dontstartnow.mp3",
    image: "img/dontstartnow.png",
    },

];


let currentSongIndex=0;

function loadSong(index){
    const song = listSongs[index]
    audio.src = song.file;
    imagePlayer.src= song.image;
    imageBackground.src = song.image;

    nameArtist.textContent= song.artist; /*console.log(song.artist)*/
    titleSong.textContent = song.title;/* console.log(song.title)*/
   /* imagePlayer.src=imageAlbum[index];
    imageBackground.src=imageAlbum[index]; */
    
}
loadSong(currentSongIndex);


function playPauseFunstion(){
    if(audio.paused){
        audio.play();
        playPause.src="img/pause.png";
        imagePlayer.style="transform: scale(1.15)"
    } else{
        audio.pause();
        playPause.src="img/play.png";
        imagePlayer.style="transform: scale(1)"
    }
}

playPause.addEventListener('click', playPauseFunstion);


nextSong.addEventListener('click', () =>{
    currentSongIndex=(currentSongIndex + 1) % listSongs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
})


previousSong.addEventListener('click', ()=>{
    currentSongIndex=(currentSongIndex - 1 + listSongs.length) % listSongs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
})

 audio.addEventListener('ended', () =>{  
    currentSongIndex=(currentSongIndex + 1)% listSongs.length;
    loadSong(currentSongIndex);
    if(!audio.paused){
        audio.play();
    }
}) 

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const minutes = Math.floor(currentTime / 60);
    const seconds =Math.floor(currentTime % 60);
    const currentPlaybackTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const totalMinutes= Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    const totalPlaybackTime = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    currentTimes.textContent = currentPlaybackTime;
    durationTime.textContent = totalPlaybackTime;
})
