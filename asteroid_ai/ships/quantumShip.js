class QuantumShip extends StandardShip {
    constructor(x, y, theta) {
        super(x, y, theta, "Quantum", true, 'violet', 2, [[0, -10],[5, 0],[7, 0],[9, -3],[11, 0],[11, 5],[9, 8],[7, 5],[5, 5],[0, 8],[-5, 5],[-7, 5],[-9, 8],[-11, 5],[-11, 0],[-9, -3],[-7, 0],[-5, 0]], 1, 1, 5, 10);
    }

    specialFeature() {
      const currentTime = Date.now();
      if (currentTime - this.lastSpecialFeatureTime >= 5000) { // Check if 5 seconds have passed
        this.lastSpecialFeatureTime = currentTime;
        const jumpDistance = 60;
        const randomAngle = Math.random() * 2 * Math.PI;

        // Calculate x and y values based on the random angle and a radius of 60
        const newX = this.x + jumpDistance * Math.cos(randomAngle);
        const newY = this.y + jumpDistance * Math.sin(randomAngle);
        this.x = newX;
        this.y = newY;
      }
    }
}