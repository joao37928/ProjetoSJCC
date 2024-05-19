const songs = [
    { title: "I most Wanted", artist: "Billie", file: "assets/Musicas/Billie-Chiriro.mp3", image: "assets/Imagens/Billie-Eilish-Hit-Me-Hard-and-soft.png" },
    { title: "I most Wanted", artist: "Beyoncé", file: "assets/Musicas/Beyoncé-II-MOST-WANTED.mp3", image: "assets/Imagens/Beyonce-II-MOST-WANTED- copy.png" },
    { title: "The Boy is mine", artist: "Ariana Grande", file: "assets/Musicas/Ariana-Grande-The-boy-is-mine.mp3", image: "assets/Imagens/Ariana-Grande-The-boy-is-mine.png" }
]
function play(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
    togglePlayPauseButtons(audioId);
}

function pause(audioId) {
    var audio = document.getElementById(audioId);
    audio.pause();
    togglePlayPauseButtons(audioId);
}

function togglePlayPauseButtons(audioId) {
    var playButton = document.getElementById("play1");
    var pauseButton = document.querySelector(".pause");
    if (audioId === "myAudio1") {
        playButton.classList.toggle("hide");
        pauseButton.classList.toggle("hide");
    }
}

function voltar(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime -= 10; // Voltar 10 segundos
}

function avancar(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime += 10; // Avançar 10 segundos
}

function atualizarTempo(audioId) {
    var audio = document.getElementById(audioId);
    var progressBar = document.querySelector(".progressBar");
    var tempoAtual = document.querySelector(".tempoAtual");

    var duracaoTotal = audio.duration;
    var tempoAtualizado = audio.currentTime;

    var minutosAtual = Math.floor(tempoAtualizado / 60);
    var segundosAtual = Math.floor(tempoAtualizado % 60);

    if (segundosAtual < 10) {
        segundosAtual = "0" + segundosAtual;
    }

    tempoAtual.textContent = minutosAtual + ":" + segundosAtual;

    var porcentagemConcluida = (tempoAtualizado / duracaoTotal) * 100;
    progressBar.value = porcentagemConcluida;

    if (tempoAtualizado === duracaoTotal) {
        var playButton = document.getElementById("play1");
        var pauseButton = document.querySelector(".pause");
        playButton.classList.remove("hide");
        pauseButton.classList.add("hide");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var audioId = "myAudio1";
    var audio = document.getElementById(audioId);
    audio.addEventListener("timeupdate", function() {
        atualizarTempo(audioId);
    });
});
