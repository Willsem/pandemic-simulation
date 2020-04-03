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
        line(SimulationWidth + time + 1, height - hg, SimulationWidth + time + 1, height - hg + d)
        stroke(71, 230, 79);
        line(SimulationWidth + time + 1, height - hg + d, SimulationWidth + time + 1, height - hg + d + h);
        stroke(250, 131, 120);
        line(SimulationWidth + time + 1, height - hg + d + h, SimulationWidth + time + 1, height - hg + d + h + v);
        stroke(235, 45, 28);
        line(SimulationWidth + time + 1, height - hg + d + h + v, SimulationWidth + time + 1, height);
    }
}
