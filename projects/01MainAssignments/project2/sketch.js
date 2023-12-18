let kpop;
let pg;
let hook = [];
let playing = false;
let texts = ["sad", "cry", "army now", "no way back", "sadness", "purple you"];
let started = false;
let lyricData = [];
let secData = [[0.1, 2.0], /*... other time intervals ... */];


function setup() {
	createCanvas(windowWidth, windowHeight);
    pg = createGraphics(width, height);
    kpop = createVideo("assets/kpop.mp4", videoLoaded);
    kpop.size(1920 / 2, 1080 / 2);
    kpop.hide();

    // Create hooks with specific start times and durations
    hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[0], 3, 2)); // Appears at 3s, disappears after 2s
    hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[0], 5, 1)); // Appears at 5s, disappears after 3s
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[0], 10, 2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[0], 20, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[0], 50, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[1], 2, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[1], 20, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[1], 12, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[1], 42, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[1], 32, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[2], 4, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[2], 56, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[2], 9, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[2], 11, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[2], 13, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 13, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 5, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 28, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 23, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 16, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[3], 31, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[4], 43, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[4], 17, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[4], 29, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[4], 48, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[4], 57, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 1, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 33, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 21, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 57, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 12, 2.2));
	hook.push(new Hook(random(100, width - 100), random(100, height - 100), 20, texts[5], 61, 2.2));

}


function videoLoaded() {
    kpop.volume(100);
}

function draw() {
	background(0);
	let currentTime = kpop.time(); // Get the current time of the video

    pg.clear(); // Clear the graphics buffer
    for (let h = 0; h < hook.length; h++) {
        hook[h].display(pg, currentTime);
    }

    image(kpop, 0, 0, width, height);
    image(pg, 0, 0, width, height);
}

function mouseMoved() {
    if (!started) {
        userStartAudio();
        started = true;
    }
}

function keyPressed() {
    if (keyCode === 32) { // Spacebar
        if (!playing) {
            kpop.play();
            playing = true;
        } else {
            kpop.pause();
            playing = false;
        }
    }
}