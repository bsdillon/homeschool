class StandardMine extends Drawable {
    constructor(x, y, name = "Standard", color = "white", triggerDistance = 20) {
        super(x, y);
        this.name = name;
        this.color = color;
        this.radius = 2;
        this.triggerDistance = triggerDistance;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }

    move() {
        // Mines typically don't move, so this method can be left empty
    }

    look(drawables, callback) {
        for (const drawable of drawables) {
            if (drawable instanceof StandardMine) {
                continue; // Skip explosion check if the object is a StandardMine or its subclass
            }

            const distance = Math.sqrt(Math.pow(this.x - drawable.x, 2) + Math.pow(this.y - drawable.y, 2));
            if (distance < this.triggerDistance) {
                if (drawable instanceof StandardShip) {
                    drawable.damage(1); // Damage the ship by 1 if it's within the triggering distance
                    callback(this);
                    return;
                }
            }
        }
    }

}

/*
Other ideas
Remote Detonation Mine: A mine that can be remotely detonated by the player, allowing for strategic placement and timing of explosions.
EMP Mine: disables shields
*/