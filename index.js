class Random {


    int() {
        min = 0;
        max = Number.MAX_SAFE_INTEGER;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    intBelow(max) {
        min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    intFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    nextFloat(min = 0, max = Number.MAX_SAFE_INTEGER) {
        return Math.random() * (max - min + 1) + min;
    }

    sample() {
        return Math.random();
    }
}

module.exports = Random;