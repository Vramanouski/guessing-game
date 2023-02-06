class GuessingGame {
    constructor() {
        let ans = 0
    }

    setRange(min, max) {
       this.minimum = min
       this.maximum = max
    }

    guess() {
        this.ans = Math.round((this.maximum+this.minimum)/2)
        return this.ans
    }

    lower() {
        this.maximum = this.ans
        return this.maximum
    }

    greater() {
        this.minimum = this.ans
        return this.minimum

    }
}

module.exports = GuessingGame;
