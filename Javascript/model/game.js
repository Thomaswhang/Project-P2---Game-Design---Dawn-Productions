// MODEL – alle data en game state

const Model = {
    laneCount: 3,
    laneHeight: 100,

    player: {
        lane: 2,
        x: 50,
        width: 80,
        height: 50
    },

    obstacles: [],

    gameRunning: false,
    score: 0,
    timeLeft: 180,

    config: {
        obstacleSpeed: 5,
        spawnMin: 1000,
        spawnMax: 2500
    }
};
