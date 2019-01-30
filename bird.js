function Bird() {
    this.y = height/2; // set y to the half of the canvas
    this.x = 25;
    this.w = this.h = 32;

    this.gravity = 0.2;
    this.velocity = 0;

    this.show = () => {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.w, this.h);
    };

    this.jump = () => {
        this.velocity -= this.h;
        this.velocity /= 5;
    };

    this.update = () => {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if(!isInBetween(this.y, 0, height)) {
            this.velocity = 0;
            this.y = height;
        }
    };
}