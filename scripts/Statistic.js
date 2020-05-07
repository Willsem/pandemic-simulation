class Statistic {
    constructor(health, virus, ill, dead) {
        let sum = health + virus + ill + dead;
        this.health = health / sum;
        this.virus = virus / sum;
        this.dead = dead / sum;
        this.ill = ill / sum;
    }

    draw(hg, time) {
        let d = hg * this.dead;
        let h = hg * this.health;
        let v = hg * this.virus;
        let i = hg * this.ill;

        stroke(30);
        line(time, height - hg, time, height - hg + d)
        stroke(71, 230, 79);
        line(time, height - hg + d, time, height - hg + d + h);
        stroke(250, 131, 120);
        line(time, height - hg + d + h, time, height - hg + d + h + v);
        stroke(235, 45, 28);
        line(time, height - hg + d + h + v, time, height);
    }
}
