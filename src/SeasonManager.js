const SEASONS = [
    'Spring', 'Summer', 'Autumn', 'Winter'
]
const DAYS_IN_SEASON = 3;

class SeasonManager {
    constructor() {
        this.seasonIndex = 0;
    }

    getSeason() {
        return SEASONS[this.seasonIndex % SEASONS.length];
    }

    dayChanged(day) {
        if (day % DAYS_IN_SEASON == 0) {
            this.seasonIndex++;
        }
    }

    update(dt) {

    }

    render(ctx) {
        ctx.font = '20px serif';
        ctx.fillStyle = 'rgba(255,255,255,1)'
        ctx.fillText(`Season: ${this.getSeason()}`, 30, 60);
    }
}

module.exports = SeasonManager;