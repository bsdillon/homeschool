class StandardShip extends Drawable {
    constructor(x, y, theta, name = "Standard", hasSpecialMove = false, color = 'white', lineWidth = 2, points = [[0, -10],[5, 10],[0, 5],[-5, 10]], speedIncrement = 2, bearingIncrement = 2, maxSpeed = 10, armor = 10) {
        super(x,y);
        this.name = name;
        this.hasSpecialMove = hasSpecialMove
        this.theta = theta;
        this.color = color;
        this.lineWidth = lineWidth;
        this.points = points;
        this.speed = 0;
        this.bearing = 0;
        this.speedIncrement = speedIncrement;
        this.bearingIncrement = bearingIncrement;
        this.maxSpeed = maxSpeed;
        this.maxArmor = armor;
        this.armor = armor;
        this.lastSpecialFeatureTime = 0;
        this.mine = null;
    }

    draw(ctx) {
        // Draw the ship
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.translate(this.x, this.y);
        ctx.rotate((this.theta + this.bearing + 90) * Math.PI / 180);

        ctx.beginPath();
        ctx.moveTo(...this.points[0]);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(...this.points[i]);
        }
        ctx.closePath();

        ctx.fill();
        ctx.restore();

        // Draw the HUD elements in the upper left-hand corner
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.font = '16px Arial';

        // Draw the ship type
        ctx.fillText(`Type: ${this.name}`, 10, 20);

        // Draw the Mine type
        ctx.fillText(`Mines: ${this.mine === null ? 'None' : this.mine}`, 10, 45);

        // Draw the Health bar
        ctx.fillText('Health:', 10, 70);
        ctx.strokeRect(80, 55, 100, 20);  // Outline for Health bar
        ctx.fillRect(80, 55, 100 * (this.armor / this.maxArmor), 20);  // Filled Health bar

        // Draw the Special bar only if the ship has a special move
        if (this.hasSpecialMove) {
            // Calculate the time elapsed since the last special feature use
            const currentTime = Date.now();
            const timeElapsed = (currentTime - this.lastSpecialFeatureTime) / 1000;  // Convert milliseconds to seconds
            const specialBarFill = Math.min(timeElapsed / 5, 1);  // Calculate fill ratio, max 1 (100%)

            // Draw the Special bar
            ctx.fillText('Special:', 10, 100);
            ctx.strokeRect(80, 85, 100, 20);  // Outline for Special bar
            ctx.fillRect(80, 85, 100 * specialBarFill, 20);  // Filled Special bar based on elapsed time
        }

        ctx.restore();
    }

    move() {
        // Calculate the new position
        var actualAngle = this.theta + this.bearing;
        this.x += this.speed * Math.cos(actualAngle * Math.PI / 180);
        this.y += this.speed * Math.sin(actualAngle * Math.PI / 180);

        // Wrap around the boundaries
        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
    }

    look(drawables, callback) {
        if (this.armor==0) {
            callback(this);
        }
    }

    changeSpeed(delta) {
        this.speed = Math.max(0, Math.min(this.speed + (delta * this.speedIncrement), this.maxSpeed));
    }

    changeBearing(delta) {
        this.bearing = (this.bearing + delta * this.bearingIncrement) % 360;
        if (this.bearing < 0) {
            this.bearing += 360;
        }
    }

    specialFeature() {
        // Implement special feature function for StandardShip
    }

    damage(value) {
        this.armor -= value; // Reduce the ship's armor by the specified value
    }
}
