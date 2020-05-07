class Ceil {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.virus = false;
        this.ill = false;
        this.dead = false;
        this.daysOfVirus = 0;
    }

    show() {
        noStroke();

        if (this.dead) {
            fill(30);
        } else if (this.ill) {
            fill(235, 45, 28);
        } else if (this.virus) {
            fill(250, 131, 120);
        } else {
            fill(71, 230, 79);
        }

        rect(this.x * onecol, this.y * onerow, onecol, onerow);

        return this;
    }

    condition() {
        if (this.dead) return 3;
        if (this.ill) return 2;
        if (this.virus) return 1;
        return 0;
    }

    start() {
        this.virus = true;
        return this;
    }

    touch() {
        if (random(100) >= 90) {
            this.virus = true;
            this.daysOfVirus = 0;
        }

        return this;
    }

    iteration() {
        if (this.virus && !this.dead) {
            this.daysOfVirus++;

            if (this.daysOfVirus > 10) {
                this.ill = true;
            }

            if (this.daysOfVirus > 20) {
                if (random(100) > 70) {
                    this.virus = false;
                    this.ill = false;
                    this.daysOfVirus = 0;
                }
            }

            if (this.daysOfVirus > 20) {
                if (random(100) > 100 - this.daysOfVirus) {
                    this.dead = true;
                }
            }
        }

        return this;
    }
}
