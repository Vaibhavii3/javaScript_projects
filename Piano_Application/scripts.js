const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
    playKey(this);
}

function playKey(key) {
    const keyAudio = document.getElementById(key.dataset.note);

    keyAudio.currentTime = 0;

    keyAudio.play();

    key.classList.add("active");

    keyAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });

    // Change the background color based on the note being played
    changeBackgroundColor(key.dataset.note);
}

function changeBackgroundColor(note) {
    const colors = {
        'C': '#b56576', // medium red
        'D': '#e56b6f', // medium coral
        'E': '#f4a261', // medium orange
        'F': '#72b4a1', // medium teal
        'G': '#6c91bf', // medium blue
        'A': '#907ad6', // medium purple
        'B': '#57c4e5'  // medium cyan
    };

    document.body.style.background = colors[note] || '#FFFFFF';
}







