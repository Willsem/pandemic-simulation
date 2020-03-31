class Statistic {
    constructor(health, virus, ill, dead) {
        let sum = health + virus + ill + dead;
        this.health = health / sum;
        this.virus = virus / sum;
        this.dead = dead / sum;
        this.ill = ill / sum;
    }

    draw(wd, hg, time) {
        noStroke();

        let d = hg * this.dead;
        let h = hg * this.health;
        let v = hg * this.virus;
        let i = hg * this.ill;

        fill(30);
        rect(wd * time, height - hg, wd, d);
        fill(71, 230, 79);
        rect(wd * time, height - hg + d, wd, h);
        fill(250, 131, 120);
        rect(wd * time, height - hg + d + h, wd, v);
        fill(235, 45, 28);
        rect(wd * time, height - hg + d + h + v, wd, i);
    }
}
