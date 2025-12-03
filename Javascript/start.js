console.log("Project Begonnen")

// START – game loop, timer en event listeners

const StartGame = {
    startTimer() {
        this.timerInterval = setInterval(() => {
            if (!Model.gameRunning) return;

            Model.timeLeft--;
            View.updateTimer();

            if (Model.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    },

    spawnLoop() {
        if (!Model.gameRunning) return;

        // placeholder obstacle
        const obstacle = {
            id: Date.now(),
            lane: Math.ceil(Math.random() * Model.laneCount),
            src: "Assets/CopBarricade.png",
            x: 900
        };

        Model.obstacles.push(obstacle);
        View.createObstacleElement(obstacle);

        const delay =
            Math.random() * (Model.config.spawnMax - Model.config.spawnMin) +
            Model.config.spawnMin;

        setTimeout(() => this.spawnLoop(), delay);
    },

    gameLoop() {
        if (!Model.gameRunning) return;

        // Hier later: obstacle movement + collision detection

        requestAnimationFrame(() => this.gameLoop());
    },

    endGame() {
        Model.gameRunning = false;
        alert("Game Over! Score: " + Model.score);
        clearInterval(this.timerInterval);
    }
};


// EVENT LISTENERS
document.getElementById("startBtn").addEventListener("click", () => {
    Controller.startGame();
});

document.getElementById("upBtn").addEventListener("click", () => {
    Controller.movePlayerUp();
});

document.getElementById("downBtn").addEventListener("click", () => {
    Controller.movePlayerDown();
});
