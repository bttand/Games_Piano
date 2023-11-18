function createKeys(value, box, color) {
    let key = document.createElement("li");
        key.className = `key ${color}`;
        key.dataset.key = value;
        key.innerHTML = `<span>${value}</span>`;
        box.appendChild(key);
}

function setKeys () {
    let box = document.getElementById("key-box");
    for (let i = 0; i < 2; i++) {
        createKeys("a", box, "white");
        createKeys("w", box, "black");
        createKeys("s", box, "white");
        createKeys("e", box, "black");
        createKeys("d", box, "white");
        createKeys("t", box, "white");
        createKeys("g", box, "black");
        createKeys("y", box, "white");
        createKeys("h", box, "black");
        createKeys("u", box, "white");
        createKeys("j", box, "black");
        createKeys("k", box, "white");           
    }
}
setKeys();

const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("src/sounds/a.wav");

let mapedKeys = [];

const playTune = (key) => {
    let audio = new Audio(`src/sounds/${key}.wav`);
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 100);
};

pianoKeys.forEach((key) => {
    mapedKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
      playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys);
