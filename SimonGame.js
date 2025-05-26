let userSeq = [];
let systemSeq = [];
let btns = ["yellow", "blue", "red", "green"];
let level = 0;
let started = false;
let h3 = document.querySelector("h3");


document.getElementById("launchBtn").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "none"; 
    document.querySelector(".container").style.opacity = "1"; 
});

document.addEventListener("keypress", function () {
    if (started==false) {
        console.log("game has started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

function levelup() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    // Random color blink
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    systemSeq.push(randomColor);
    console.log(systemSeq);

    btnFlash(randombtn);
}

function checkAns(idx) {
    if (userSeq[idx] === systemSeq[idx]) {
        if (systemSeq.length === userSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `GAME OVER! <br> PRESS ANY KEY TO START AGAIN <br> <u>Your score was ${level}</u>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    systemSeq = [];
    userSeq = [];
    level = 0;
}



