// VIEW – alles wat met de HTML te maken heeft

const View = {
    updatePlayerPosition() {
        const playerEl = document.getElementById("player");
        const laneIndex = Model.player.lane - 1;
        playerEl.style.top = (laneIndex * Model.laneHeight) + "px";
    },

    updateTimer() {
        const m = Math.floor(Model.timeLeft / 60);
        const s = Model.timeLeft % 60;
        document.getElementById("timer").innerText =
            `${m}:${s.toString().padStart(2, '0')}`;
    },

    updateScore() {
        document.getElementById("score").innerText =
            "Score: " + Model.score;
    },

    createObstacleElement(obstacle) {
        const img = document.createElement("img");
        img.src = obstacle.src;
        img.classList.add("obstacle");
        img.style.position = "absolute";
        img.style.right = "-100px";
        img.style.top = (obstacle.lane - 1) * Model.laneHeight + "px";
        img.style.width = "80px";
        img.dataset.id = obstacle.id;

        document.getElementById("game").appendChild(img);
    },

    removeObstacleElement(id) {
        const el = document.querySelector(`img[data-id="${id}"]`);
        if (el) el.remove();
    }
};
