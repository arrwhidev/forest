class DayManager {
    constructor() {
        this.prevDay = 0;
        this.day = 0;
        this.preciseDay = 0;
        this.subscriptions = [];
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

    getDay() {
        return this.day;
    }

    update(dt) {
        this.preciseDay += dt;
        this.day = Math.ceil(this.preciseDay);

        if(this.day > this.prevDay) {
            for (let index = 0; index < this.subscriptions.length; index++) {
                this.subscriptions[index](this.getDay());
            }
        }

        this.prevDay = this.day;
    }

    render(ctx) {
        ctx.font = '20px serif';
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillText(`Day: ${this.getDay()}`, 30, 30);
    }
}

module.exports = DayManager;