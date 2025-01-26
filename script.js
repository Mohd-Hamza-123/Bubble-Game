
const timerid = document.getElementById('timer');
const hitNum = document.getElementById('hitNum');
const scoreUpdate = document.querySelector('#scoreUpdate');

let bottom_panel = document.querySelector('.bottom_panel');
let startingTime = 60;
let scoreNum = 0;


function makeBubble() {


    let clutter = "";
    for (let i = 0; i < 152; i++) {
        let randNum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randNum}</div>`;
    }
    bottom_panel.innerHTML = clutter;
}

makeBubble();
let bubble = Array.from(document.querySelectorAll('.bubble'));
function timer() {
    let timerInt = setInterval(() => {
        if (startingTime > 0) {
            startingTime--;
            timerid.textContent = startingTime;
        }
        else {
            clearInterval(timerInt);
            bottom_panel.innerHTML = `<h1>Game Over</h1>`
            setTimeout(() => {
                bottom_panel.innerHTML = `<h2>Score : ${scoreNum}<h2/>`
            }, 2000)



        }
    }, 1000)
}
timer();
function randHit() {
    // randNum
    let randNum = Math.floor(Math.random() * 10);
    hitNum.textContent = randNum;
}
randHit();



// console.log(bubble)
function score(e) {
    console.log(e.target)
    console.log(Number(e.target.textContent))
    console.log(Number(hitNum.textContent))
    if (Number(e.target.textContent) === Number(hitNum.textContent)) {
        console.log(Number(e.target.textContent))
        console.log(Number(hitNum.textContent))
        scoreNum++;
        scoreUpdate.textContent = `${scoreNum}`;
        makeBubble();
        randHit();
    }
}

bottom_panel.addEventListener('click', score);


