window.onload = function () {
    const days = document.querySelectorAll('days');
    const hours = document.querySelectorAll('hours');
    const minutes = document.querySelectorAll('minutes');
    const seconds = document.querySelectorAll('seconds');


}



const currentWedding = new Date().getFullYear();

const OurWedding = new Date(`September 18 ${currentWedding} 00:00:00`);

// Update Countdowntime
function updateCountdowntime() {
    const currentTime = new Date();
    const diff = OurWedding - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;



    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdowntime, 1000);

// function play() {
//     var audio = new Audio(
//         "https://www.bensound.com/bensound-music/bensound-moose.mp3"
//     );
//     audio.play();
//     audio.loop = true;
//     audio.addEventListener(
//         "ended",
//         function () {
//             this.currentTime = 0;
//             this.play();
//         },
//         true
//     );
// }
// play();


