// CONTROLLER – input en game logica

const Controller = {
    movePlayerUp() {
        if (Model.player.lane > 1) {
            Model.player.lane--;
            View.updatePlayerPosition();
        }
    },

    movePlayerDown() {
        if (Model.player.lane < Model.laneCount) {
            Model.player.lane++;
            View.updatePlayerPosition();
        }
    },

    startGame() {
        if (Model.gameRunning) return;
        Model.gameRunning = true;

        Model.score = 0;
        Model.timeLeft = 180;
        View.updateScore();
        View.updateTimer();
        View.updatePlayerPosition();

        StartGame.startTimer();
        StartGame.gameLoop();
        StartGame.spawnLoop();
    }
};
