let now_playing = document.getElementById('now-playing')
let track_art = document.getElementById('track-art')
let track_name = document.getElementById('track-name')
let track_artist = document.getElementById('track-artist')

let next_btn = document.getElementById('next-track');
let prev_btn = document.getElementById('prev-track');
let audio_call = document.getElementById('audio-call')
var index = 0
let music_list = [
    {
        img: './pic/image_2.jpg',
        name: 'Hum Tumhari',
        artist: 'Ali zafar',
        music: './song/song_2.mpeg',
        number:"1",
    }
    ,
    {
        img: './pic/image_4.jpg',
        name: 'Kesariya',
        artist: 'Arijit singh',
        music: './song/song_3.mpeg',
        number:"2",
    },
    {
        img: './pic/image_3.jpg',
        name: 'Janam Janam',
        artist: 'Arijit Singh ',
        music: './song/song_5.mpeg',
        number:"3",
    }
    ,
    {
        img: './pic/image_1.jpg',
        name: 'Pasoori',
        artist: 'Tenu Khabar Kive Hove',
        music: "./song/song_4.mpeg",
        number:"4",
    },
    {
        img: './pic/image_5.jpg',
        name: 'Khal Nayak',
        artist: 'Sanjay Dutt',
        music: "./song/song_6.mpeg",
        number:"5",
    },
    {
        img: './pic/image_6.jpg',
        name: 'Zara si Dilma',
        artist: 'KK|Pritam|Sayeed Quadri',
        music: "./song/song_1.mpeg",
        number:"6",
    },
]

window.onload = function () {
    // audio_call.src=music_list[index].music
    audio_call.src = music_list[index].music
    track_art.src = music_list[index].img
    track_name.innerHTML = music_list[index].name
    track_artist.innerHTML = music_list[index].artist
}
function input() {
    var input = document.getElementById("input")

    for (let i = 0; i < music_list.length; i++) {
        if (input.value === music_list[i].number ||input.value === music_list[i].name) {
    
            audio_call.src = music_list[i].music
            track_art.src = music_list[i].img
            track_name.innerHTML = music_list[i].name
            track_artist.innerHTML = music_list[i].artist
        }
         
      }
}
function nextTrack() {
    index++
    if (index === music_list.length) {
        index = 0
        audio_call.src = music_list[index].music
        track_art.src = music_list[index].img
        track_name.innerHTML = music_list[index].name
        track_artist.innerHTML = music_list[index].artist
        return
    }
    else {
        audio_call.src = music_list[index].music
        track_art.src = music_list[index].img
        track_name.innerHTML = music_list[index].name
        track_artist.innerHTML = music_list[index].artist
    }
}

function prevTrack() {
    index--
    if (index < 0) {
        index = music_list.length
        audio_call.src = music_list[index].music
        track_art.src = music_list[index].img
        track_name.innerHTML = music_list[index].name
        track_artist.innerHTML = music_list[index].artist
    }
    else {
        audio_call.src = music_list[index].music
        track_art.src = music_list[index].img
        track_name.innerHTML = music_list[index].name
        track_artist.innerHTML = music_list[index].artist
    }
}