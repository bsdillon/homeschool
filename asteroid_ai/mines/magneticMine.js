class MagneticMine extends StandardMine {
    constructor(x, y, name = "Magnetic", color = "magenta", triggerDistance = 100) {
        super(x, y, name, color, triggerDistance);
        this.attractionDistance = 100; // Larger sensing distance
        this.attractionRange = 5; // Distance within which the mine explodes
    }

    look(drawables, callback) {
        let closestShip = null;
        let closestDistance = Infinity;

        // Find the closest ship within the attraction distance
        for (const drawable of drawables) {
            if (drawable instanceof StandardShip) {
                const distance = Math.sqrt(Math.pow(this.x - drawable.x, 2) + Math.pow(this.y - drawable.y, 2));
                if (distance < this.attractionDistance && distance < closestDistance) {
                    closestShip = drawable;
                    closestDistance = distance;
                }
            }
        }

        // If a ship is found within the attraction distance, move towards it
        if (closestShip) {
            const dx = closestShip.x - this.x;
            const dy = closestShip.y - this.y;
            const distanceToMove = Math.min(this.attractionRange, closestDistance - this.attractionRange);
            this.x += dx / closestDistance * distanceToMove;
            this.y += dy / closestDistance * distanceToMove;
        }

        // If the distance to the ship is less than the attraction range, explode
        if (closestDistance < this.attractionRange) {
            closestShip.damage(1); // Damage the ship by 1 if it's within the triggering distance
            callback(this)
        }
    }
}