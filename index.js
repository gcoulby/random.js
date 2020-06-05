class Random {
    next(min = 0, max = Number.MAX_SAFE_INTEGER) {
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