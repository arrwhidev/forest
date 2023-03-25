const SEASONS = [
    'Spring', 'Summer', 'Autumn', 'Winter'
]
const DAYS_IN_SEASON = 90;

class SeasonManager {
    constructor(dayManager) {
        this.dayManager = dayManager;
        this.seasonIndex = 0;
        this.lastDay = 0; // Using this to debounce day changes.
    }

    getSeason() {
        return SEASONS[this.seasonIndex % SEASONS.length];
    }

    update(dt) {
        const day = this.dayManager.getDay();
        if (day != this.lastDay && day % DAYS_IN_SEASON == 0) {
            this.seasonIndex++;
        }
        this.lastDay = day;
    }

    render(ctx) {
        ctx.font = '20px serif';
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillText(`Season: ${this.getSeason()}`, 30, 60);
    }
}

module.exports = SeasonManager;