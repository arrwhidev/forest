class World {
    constructor() {
        this.bgColour = 'rgba(11,11,11,1)';
        this.blendingMode = 'source-over';
        this.worldObjects = [];
    }

    addWorldObject(e) {
        this.worldObjects.push(e);
    }

    update(dt) {
        this.worldObjects.forEach(f => f.update(dt, this))
    }

    render(ctx) {
        this.clearScreen(ctx);
        this.worldObjects.forEach(f => f.render(ctx))
    }

    clearScreen(ctx) {
        ctx.globalCompositeOperation = this.blendingMode;
        ctx.fillStyle = this.bgColour;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}

module.exports = World;
