class Forest {
    constructor() {
        this.bgColour = 'rgba(7,77,7,1)';
        this.blendingMode = 'source-over';
        this.clear();
    }

    clear() {
        this.elements = [];
    }

    addElement(e) {
        this.elements.push(e);
    }

    update(dt) {
        this.elements.forEach(f => f.update(dt, this))
    }

    render(ctx) {
        this.clearScreen(ctx);
        this.elements.forEach(f => f.render(ctx, this))
    }

    clearScreen(ctx) {
        ctx.globalCompositeOperation = this.blendingMode;
        ctx.fillStyle = this.bgColour;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}

module.exports = Forest;
