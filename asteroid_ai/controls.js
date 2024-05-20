class Controls {
    constructor(ship) {
        this.ship = ship;
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        switch (event.code) {
            case 'ArrowUp':
                this.ship.changeSpeed(1);
                break;
            case 'ArrowDown':
                this.ship.changeSpeed(-1);
                break;
            case 'ArrowLeft':
                this.ship.changeBearing(-1);
                break;
            case 'ArrowRight':
                this.ship.changeBearing(1);
                break;
            case 'ControlRight': // Right CTRL button
                this.ship.specialFeature();
                break;
            default:
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.code) {
            case 'ArrowUp':
            case 'ArrowDown':
                this.ship.changeSpeed(0);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                this.ship.changeBearing(0);
                break;
            default:
                break;
        }
    }
}