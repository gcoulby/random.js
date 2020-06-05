class Random {


    int() {
        let min = 0;
        let max = Number.MAX_SAFE_INTEGER;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    intBelow(max) {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    intFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    float() {
        let min = 0
        let max = Number.MAX_SAFE_INTEGER
        return Math.random() * (max - min + 1) + min;
    }

    floatBelow(max) {
        let min = 0;
        return Math.random() * (max - min + 1) + min;
    }

    floatBetween(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    sample() {
        return Math.random();
    }
}

module.exports = Random;