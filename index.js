module.exports = class Random {
    next() {
        let min = 0;
        let max = Number.MAX_SAFE_INTEGER;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    next(max) {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    next(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    nextFloat() {
        let min = 0;
        let max = parseFloat(Number.MAX_SAFE_INTEGER);
        return Math.random() * (max - min + 1) + min;
    }

    nextFloat(max) {
        let min = 0;
        return Math.random() * (max - min + 1) + min;
    }

    nextFloat(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    sample() {
        return Math.Random();
    }
}