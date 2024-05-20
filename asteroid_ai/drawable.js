class Drawable {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        // Base draw method to be overridden by subclasses
    }

    move() {
        // Base move method to be overridden by subclasses
    }

    look(drawables, callback) {
    }
}