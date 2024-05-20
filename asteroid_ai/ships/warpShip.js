class WarpShip extends StandardShip {
    constructor(x, y, theta) {
        super(x, y, theta, "Warp", true, 'lightgrey', 2, [[0, -20],[5, -15],[10, 0],[5, 5],[5, 5],[5, -5],[-5, -5],[-5, 5],[-10, 0],[-5, -15]], 1, 1, 10, 10);
    }

    specialFeature() {
      const currentTime = Date.now();
      if (currentTime - this.lastSpecialFeatureTime >= 5000) { // Check if 5 seconds have passed
        this.lastSpecialFeatureTime = currentTime;
        const jumpDistance = 60;
        var trueAngle = this.theta + this.bearing;
        this.x += jumpDistance * Math.cos(trueAngle * Math.PI / 180);
        this.y += jumpDistance * Math.sin(trueAngle * Math.PI / 180);
      }
    }
}