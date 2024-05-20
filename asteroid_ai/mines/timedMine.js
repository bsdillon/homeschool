class TimedMine extends StandardMine {
    constructor(x, y, name = "Timed", color = "cyan", triggerDistance = 50) {
        super(x, y, name, color, triggerDistance);
        this.creationTime = Date.now(); // Record the creation time
        this.explosionTime = this.creationTime + 15000; // Set explosion time to 15 seconds (in milliseconds)
    }

    look(drawables, callback) {
        const currentTime = Date.now();
        if (currentTime >= this.explosionTime) {
            // If 15 seconds have elapsed, trigger explosions
            for (const drawable of drawables) {
                const distance = Math.sqrt(Math.pow(this.x - drawable.x, 2) + Math.pow(this.y - drawable.y, 2));
                if (distance < this.triggerDistance) {
                    if (drawable instanceof StandardShip) {
                        drawable.damage(1); // Damage the ship by 1 if it's within the triggering distance
                    }
                }
            }

            callback(this);
        }
    }
}