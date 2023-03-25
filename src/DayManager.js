class DayManager {
    constructor() {
        this.day = 0;
    }

    update(dt) {
        this.day += dt;
    }

    getDay() {
        return Math.ceil(this.day);
    }

    render(ctx) {
        ctx.font = '20px serif';
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillText(`Day: ${this.getDay()}`, 30, 30);
    }
}

module.exports = DayManager;