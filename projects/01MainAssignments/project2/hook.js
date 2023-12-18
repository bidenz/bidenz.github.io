class Hook {
    constructor(x, y, size, text, startTime, duration) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.text = text;
        this.startTime = startTime;
        this.endTime = startTime + duration; // Calculate the end time
    }

    display(cg, currentTime) {
        // Display the hook only if the current time is within the start and end time
        if (currentTime >= this.startTime && currentTime < this.endTime) {
            cg.fill(255); // Fill color for the rectangle
            //cg.rect(this.x, this.y, this.size, this.size);
            this.drawHeart(cg);
            if (dist(mouseX, mouseY, this.x, this.y) < this.size) {
                cg.fill(250, 10, 250);
                cg.stroke(250, 250, 250, 100)
                cg.textSize(30); // Set text size
                cg.textAlign(CENTER, CENTER);
                cg.text(this.text, this.x, this.y - 15);
            }
        }
    }
    drawHeart(cg) {
        cg.push();
        cg.fill(255, 0, 255); // Red color for the heart
        cg.beginShape();
        cg.vertex(this.x, this.y);
        cg.bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
        cg.bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
        cg.endShape(CLOSE);
        cg.pop();
    }
}