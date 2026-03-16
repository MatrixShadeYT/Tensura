const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = canvas.height*1.5;

class Game {
    constructor() {}
}

const game = new Game();
let lastTime = 0;
function animate(timeStamp) {
    // REPETITION
    window.requestAnimationFrame(animate);
    const deltaTime = timeStamp-lastTime;
    lastTime = timeStamp;
    // CODE
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
window.requestAnimationFrame(animate);