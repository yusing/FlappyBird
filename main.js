let bird;
let pipes = [];
const interval = 40; // interval of creating new pipe
let isInBetween = (cmp, lower, upper) => cmp >= lower && cmp <= upper;

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
}

function draw() {
    background(0); // black background
    bird.update();
    bird.show();

    if(frameCount % interval === 0) { // create pipe every 40 frames
        pipes.push(new Pipe());
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
        if(isInBetween(bird.x, pipes[i].x, pipes[i].x+5) && !isInBetween(bird.y, pipes[i].top+1, pipes[i].top+pipes[i].hdist))
        {
            pipes[i].highlight = true;
        }
    }
}

function keyPressed() {
    if(key === ' ') {
        bird.jump();
    }
}