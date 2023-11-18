function createKeys(value, box, color) {
    let key = document.createElement("li");
        key.className = `key ${color}`;
        key.dataset.key = value;
        key.innerHTML = `<span>${value}</span>`;
        box.appendChild(key);
}

function setKeys () {
    let box = document.getElementById("key-box");
    createKeys("q", box, "white");
    createKeys("2", box, "black");
    createKeys("w", box, "white");
    createKeys("3", box, "black");
    createKeys("e", box, "white");
    createKeys("r", box, "white");
    createKeys("5", box, "black");
    createKeys("t", box, "white");
    createKeys("6", box, "black");
    createKeys("y", box, "white");
    createKeys("7", box, "black");
    createKeys("u", box, "white");
    createKeys("x", box, "white");
    createKeys("d", box, "black");
    createKeys("c", box, "white");
    createKeys("f", box, "black");
    createKeys("v", box, "white");
    createKeys("b", box, "white");
    createKeys("h", box, "black");
    createKeys("n", box, "white");
    createKeys("j", box, "black");
    createKeys("m", box, "white");
    createKeys("k", box, "black");
    createKeys(",", box, "white");           
}
setKeys();

const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

const playTune = (key) => {
    let audio = new Audio(`src/sounds/${key}.mp3`);
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
