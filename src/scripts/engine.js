const emojis = [
    "😀",
    "😀",
    "😁",
    "😁",
    "😂",
    "😂",
    "😢",
    "😢",
    "😱",
    "😱",
    "🥶",
    "🥶",
    "😡",
    "😡",
    "😍",
    "😍"
];
let openCard = [];

let time = 0; // Contador de tempo
let timer; // Variável para o cronômetro
let gameStarted = false; // Verifica se o jogo já começou

let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2 :-1))

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box)
}

function handleClick() {
    if (!gameStarted) {
        startTimer(); // Inicia o cronômetro no primeiro clique
        gameStarted = true;
    }

    if (openCard.length < 2) {
        this.classList.add("boxOpen"); // Mostra o cartão
        openCard.push(this); // Adiciona à lista de abertos
    }

    if (openCard.length === 2) {
        setTimeout(checkMatch, 500); // Verifica após 500ms
    }
}

function checkMatch() {
    if(openCard[0].innerHTML === openCard[1].innerHTML) {
        openCard[0].classList.add("boxMatch")
        openCard[1].classList.add("boxMatch")
    } else {
        openCard[0].classList.remove("boxOpen")
        openCard[1].classList.remove("boxOpen")
    }

    openCard = []

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Ganhou")
    }
}
function startTimer() {
    timer = setInterval(() => {
        time++;
        document.getElementById("time").textContent = time; // Atualiza o tempo na tela
    }, 1000); // Incrementa o contador a cada segundo
}