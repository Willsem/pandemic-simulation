let cols;
let rows;
let onerow;
let onecol;
let ceils;
let stat;
let haveVirus;

let SimulationHeight = 500;
let SimulationWidth  = 500;
let GraphicsHeight = 250;

function setup() {
    createCanvas(SimulationWidth + 700, SimulationHeight);

    cols = 51;
    rows = 51;
    onecol = SimulationWidth / cols;
    onerow = SimulationHeight / rows;

    ceils = [];
    for (let i = 0; i < rows; ++i) {
        row = [];
        for (let j = 0; j < cols; ++j) {
            row[j] = new Ceil(i, j);
        }
        ceils[i] = row;
    }

    ceils[int(rows / 2)][int(cols / 2)].start();
    haveVirus = true;

    stat = [new Statistic(cols * rows, 0, 0, 0)];
}

function draw() {
    if (haveVirus) {
        background(250);

        let touched = new Set();
        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                if (ceils[i][j].virus && !ceils[i][j].dead) {
                    if (j + 1 < cols) touched.add(ceils[i][j + 1]);
                    if (j - 1 >= 0)   touched.add(ceils[i][j - 1]);
                    if (i + 1 < rows) touched.add(ceils[i + 1][j]);
                    if (i - 1 >= 0)   touched.add(ceils[i - 1][j]);
                }
            }
        }

        for (let el of touched.values()) {
            el.touch();
        }

        if (touched.size === 0) haveVirus = false;

        let health = 0, virus = 0, ill = 0, dead = 0;

        for (let i = 0; i < rows; ++i) {
            for (let j = 0; j < cols; ++j) {
                let cond = ceils[i][j].show().iteration().condition();
                if (cond === 0) health++;
                else if (cond === 1) virus++;
                else if (cond === 2) ill++;
                else if (cond === 3) dead++;
            }
        }

        stat[stat.length] = new Statistic(health, virus, ill, dead);

        if (cols * rows < 20000) {
            stroke(30);

            for (let i = 0; i <= rows; ++i) {
                line(0, i * onerow, SimulationWidth, i * onerow);
            }

            for (let j = 0; j <= cols; ++j) {
                line(j * onecol, 0, j * onecol, SimulationHeight);
            }
        }

        let iteration = float(stat.length / (width - SimulationWidth));
        for (let i = 0.0; i < stat.length; i += iteration) {
            let it = round(i);
            stat[it >= stat.length ? stat.length - 1 : it].draw(GraphicsHeight, i / iteration);
        }
    }

    frameRate(60);
}
