function Pipe() {
    this.hdist = random(128, 192); // between 2h to 4h
    this.top = random(128, height/2);
    this.bottom = height - this.top - this.hdist;
    this.x = width; // set x to width of the canvas
    this.w = 20;
    this.speed = 2.5;
    this.highlight = false;

    this.show = () => {
        this.highlight ? fill(255, 0, 0) : fill(0, 255, 0);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    };

    this.update = () => {
        this.x -= this.speed; // move to the left;
    };
}