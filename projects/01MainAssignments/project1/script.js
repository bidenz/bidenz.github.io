let mySound;
let myFont;
let mic;
let micLevel;
let slider;
let playBtn;
let totalSec;
let currentSec;
let lyricData;
var gif_loadImg;
let amplitude;
let s=0
let secpoint = []
let visualpoint = []
let ellipseDiameter = 20;
let playing = false;

function preload() {

  mySound = loadSound('assets/butter.mp3');
	myFont = loadFont('assets/fantasquesansmono-bold.ttf');
  gif_loadImg = loadImage('assets/kpop.gif');
  
  createData();
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(canvasPressed);
  background(220);
  //text('tap here to play', 10, 20);
	mySound.setVolume(0.2);
  mySound.play();


  totalSec = mySound.duration();
	mic = new p5.AudioIn();
  mic.start();
  
  //amplitude
  amplitude = new p5.Amplitude();
  amplitude.setInput(mySound);
}


function draw() {
  background(20,20,20);
  
 
  
  //background gif
 image(gif_loadImg,0, 0, width, height);
  
  //mic output
  micLevel = mic.getLevel();

  //lyrics conditionals
  
  currentSec = mySound.currentTime();
  
  for (let i = 0; i < lyricData.length; i++){
      
    let tempLyric = lyricData[i];

    if(currentSec >= tempLyric.startTime && currentSec <= tempLyric.endTime){
      
      //let textRed = map(micLevel,0,0.4,255,0);
      //let textBlue = map(micLevel,0,0.4,0,255);
     
			
			
			// for(let i = 0; i < currentSec; i++) {
       //let secpoint = lyricData[i];
       // } 
			//for(int i=0; i < valueArray.length; i++) {
  // valueArray[i] = i + 32;
 //}
			
      textAlign(CENTER, BOTTOM);
      textSize(35);
      textFont(myFont);
      fill(255);
			stroke(0);
			strokeWeight(4);
      text(tempLyric.lyric,width/2, height-50);
			
			let bbox = myFont.textBounds(tempLyric.lyric,width/2, height-50);
     // ellipse(bbox.x+2, bbox.y-10, 10,10);
		
			 
			let currentLyric = lyricData[visualpoint];
			
  let percentage = map(currentSec, tempLyric.startTime, tempLyric.endTime, 0, 1);

  // Calculate ellipse position based on percentage completion
  let startX = width / 4;
			//let endX = bbox.x+2;
			let endX = 3*width / 4;
			//let ellipseX = lerp(bbox.x+2, endX, percentage);
			//let endX = 2*bbox.w+2;
			let ellipseX = lerp(bbox.x+2, bbox.x+2 +bbox.w , percentage);
  let ellipseY = bbox.y-10; // Adjust as needed

  // Display the ellipse
  fill(255, 0, 0); // Adjust color as needed
  ellipse(ellipseX, ellipseY, ellipseDiameter, ellipseDiameter);

  // Check if it's time to move to the next lyric
  if (currentSec > tempLyric.endTime && visualpoint < lyricData.length -1) {
    lyricIndex++;
		
		
		//secpoint": [4.1, 5],
	    //"visualpoint": [1,7,9,13,16,20,23, 26,34],
  }
      
      if(tempLyric.visual == "visual1"){
       visual1();
      }
      
       if(tempLyric.visual == "visual2"){
       visual2();
      }
      }
    }
  
 
}


function visual1(){ 
	
}
	
  /*let level = amplitude.getLevel();

  let recRedChannel = map (level,0,.1,73,155);
  let recGreenChannel = map (level,0,.1,63,0);
  let recBlueChannel = map (level,0,.1,157,31);
  noStroke();
  fill(recRedChannel,recGreenChannel,recBlueChannel);
  
  let rectX = random (0,640);
  let rectWidth = random (0,40);
  let rectDegree =random (-30,30);
  
  angleMode(DEGREES); 
  rectMode(CENTER);
  
  fill(recRedChannel,recGreenChannel,recBlueChannel);
  rotate(rectDegree);
  rect(rectX, 180, rectWidth, 900);
}*/
  




function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
	playing = true;
	if (playing){
			mySound.play();
	}
	
}

function keyPressed() {
	if (keyCode == "32") {	
		playing = false;
		//pressed = !pressed;
		if(!playing){
		mySound.pause();
		}	
		
	}
}



function createData(){
  lyricData = [
    {
      "lyric": "Smooth like butter",
      "startTime": 4.1,
      "endTime": 6,
			"secpoint": [4.1, 5],
	    "visualpoint": [1, 8, 13],
      "visual": "visual1"
    },
			
    {
      "lyric": "Like a criminal undercover",
      "startTime": 6.1,
      "endTime": 8.05,
			"secpoint": [4.1, 5],
	    "visualpoint": [1, 6,8,17],
      "visual": "visual1"
    },
    {
      "lyric": "Gon' pop like trouble",
      "startTime": 8.1,
      "endTime": 10.1,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,10,15],
      "visual": "visual1"
    },
    {
      "lyric": "breaking into your heart like that, (ooh)",
      "startTime": 10.2,
      "endTime": 12.2,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,10,15,20,31,38],
      "visual": "visual1"
    },
    {
      "lyric": "Cool shade, stunner",
      "startTime": 13.1,
      "endTime": 14.2,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,13],
      "visual": "visual1"
    },
    {
      "lyric": "Yeah, I owe it all to my mother (uh)",
      "startTime": 14.3,
      "endTime": 17,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,7,9,13,16,20,23, 26,34],
      "visual": "visual1"
    },
    {
      "lyric": "Hot like summer",
      "startTime": 17.2,
      "endTime": 19,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,5,10],
      "visual": "visual1"
    },
    {
      "lyric": "Yeah, I'm making you sweat like that (break it down!)",
      "startTime": 19.1,
      "endTime": 22,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,7,11, 18, 22,28, 33,39],
      "visual": ""
    },
    {
      "lyric": "Ooh, when I look in the mirror",
      "startTime": 22.1,
      "endTime": 24,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,13,18,21],
      "visual": ""
    },
    {
      "lyric": "I'll melt your heart into two",
      "startTime": 24.1,
      "endTime": 26.1,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,13,16,22, 27],
      "visual": ""
    },
     {
      "lyric": "I got that superstar glow, so",
      "startTime": 26.2,
      "endTime": 28,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,3,7,15,16,22,28],
      "visual": ""
    },
     {
      "lyric": "Ooh (Do the boogie, like)",
      "startTime": 28.16,
      "endTime": 30.1,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,6],
      "visual": ""
    },
     {
      "lyric": "A side step, right-left, to my beat",
      "startTime": 30.5,
      "endTime": 33,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,3,8,14,26,27,32],
      "visual": ""
    },
     {
      "lyric": "High like the moon, rock with me, baby",
      "startTime": 35 ,
      "endTime": 39,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,21,26,31,35],
      "visual": ""
    },
     {
      "lyric": "Know that I got that heat",
      "startTime": 39.1,
      "endTime": 40.2,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,13,17,22],
      "visual": ""
    },
     {
      "lyric": "Let me show you 'cause talk is cheap",
      "startTime": 41.1,
      "endTime": 43.1,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,5,8,13,18,24,29,32],
      "visual": ""
    },
     {
      "lyric": "Side step, right-left, to my beat",
      "startTime": 43.2,
      "endTime": 46.1,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,6,12,24,27,30],
      "visual": ""
    },
     {
      "lyric": "Get it, let it roll",
      "startTime": 46.11,
      "endTime": 48,
			  "secpoint": [4.1, 5],
	    "visualpoint": [1,5,9,13,16],
      "visual": ""
    },
     {
      "lyric": "Smooth like butter",
      "startTime": 48.1,
      "endTime": 49.2,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,8,13],
      "visual": ""
    },
     {
      "lyric": "Pull you in like no other",
      "startTime": 50,
      "endTime": 52.04,
			 "secpoint": [4.1, 5],
	    "visualpoint": [1,6,10,13,18,21],
      "visual": ""
    },
    {
      "lyric": "Don't need no Usher",
      "startTime": 52.1,
      "endTime": 54,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,7,12,15],
      "visual": ""
    },
    {
      "lyric": "To remind me you got it bad",
      "startTime": 54.1,
      "endTime": 56.1,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,4,11,14,18,22,25],
      "visual": ""
    },
    {
      "lyric": "Ain't no other",
      "startTime": 56.2,
      "endTime": 58.1,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,4,11,14,18,22,25],
      "visual": ""
    },
    {
      "lyric": "that can sweep you up like a robber",
      "startTime": 58.2,
      "endTime": 60,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,10,16,20,23,28],
      "visual": ""
    },
    {
      "lyric": "Straight up, I (got ya)",
      "startTime": 61,
      "endTime": 62.2,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,10,14],
      "visual": ""
    },
    {
      "lyric": "Making you fall like that (break it down)",
      "startTime": 63,
      "endTime": 65.1,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,8,12,16,22,28],
      "visual": ""
    },
    {
      "lyric": "Ooh, when I look in the mirror",
      "startTime": 65.2,
      "endTime": 67.2,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,13,18,21,25],
      "visual": ""
    },
    {
      "lyric": "I'll melt your heart into two",
      "startTime": 68,
      "endTime": 69.2,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,11,16,22,27],
      "visual": ""
    },
    {
      "lyric": "I got that superstar glow, so",
      "startTime": 70.1,
      "endTime": 72,
				"secpoint": [4.1, 5],
	    "visualpoint": [1,3,7,15,22,28],
      "visual": ""
    },
    {
      "lyric": "Ooh (do the boogie, like)",
      "startTime": 72.06,
      "endTime": 74,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6],
      "visual": ""
    },
    {
      "lyric": "Side step, right-left, to my beat",
      "startTime": 74.1,
      "endTime": 77,
			"secpoint": [4.1, 5],
	    "visualpoint": [1,6,12,24,27,30],
      "visual": ""
    },
    {
      "lyric": "High like the moon, rock with me, baby",
      "startTime": 78.19,
      "endTime": 82.1,
			"secpoint": [4.1,5],
	    "visualpoint": [0,6,12,24,27,30],
      "visual": ""
    },
    {
      "lyric": "Know that I got that heat",
      "startTime": 82.2,
      "endTime": 84.1,
      "visual": ""
    },
     {
      "lyric": "Let me show you 'cause talk is cheap",
      "startTime": 84.2,
      "endTime": 86.2,
      "visual": ""
    },
    {
      "lyric": "A side step, right-left, to my beat",
      "startTime": 87,
      "endTime": 89.9,
      "visual": ""
    },
    {
      "lyric": "Get it, let it roll",
      "startTime": 90,
      "endTime": 91.1,
      "visual": ""
    },
    {
      "lyric": "(Get it, let it roll)",
      "startTime": 98.2,
      "endTime": 100.1,
      "visual": ""
    },
    {
      "lyric": "(Get it, let it roll)",
      "startTime": 107.1,
      "endTime": 109.1,
      "visual": ""
    },
    {
      "lyric": "Ice on my wrist, I'm the nice guy",
      "startTime": 109.18,
      "endTime": 111.1,
      "visual": ""
    },
    {
      "lyric": "Got the right body and the right mind",
      "startTime": 112,
      "endTime": 113.1,
      "visual": ""
    },
    {
      "lyric": "Rolling up the party, got the right vibe",
      "startTime": 114,
      "endTime": 115,
      "visual": ""
    },
    {
      "lyric": "Smooth like (butter), hate us (love us)",
      "startTime": 116,
      "endTime": 118,
      "visual": ""
    },
    {
      "lyric": "Fresh boy, pull up and we lay low",
      "startTime": 118.1,
      "endTime": 120,
      "visual": ""
    },
    {
      "lyric": "All the players get moving when the bass low",
      "startTime": 120.1,
      "endTime": 122,
      "visual": ""
    },
    {
      "lyric": "Got ARMY right behind us when we say so",
      "startTime": 122.1,
      "endTime": 124.2,
      "visual": ""
    },
    {
      "lyric": "Let's go",
      "startTime": 125.2,
      "endTime": 126,
      "visual": ""
    },
     {
      "lyric": "Side step, right-left, to my beat (right-left, to my beat)",
      "startTime": 126.1,
      "endTime": 130.2,
      "visual": ""
    },
    {
      "lyric": "High like the moon, rock with me, baby",
      "startTime": 131,
      "endTime": 134.2,
      "visual": ""
    },
		{
      "lyric": "You know that I got that heat",
      "startTime": 135,
      "endTime": 136.1,
      "visual": ""
    },
		{
      "lyric": "Let me show you 'cause talk is cheap (you know that talk is cheap)",
      "startTime": 137,
      "endTime": 139.1,
      "visual": ""
    },
		{
      "lyric": "Side step, right-left, to my beat",
      "startTime": 139.2,
      "endTime": 142,
      "visual": ""
    },
		{
      "lyric": "Get it, let it roll",
      "startTime": 142.1,
      "endTime": 143.1,
      "visual": ""
    },
		{
      "lyric": "Smooth like (butter), cool shade (stunner)",
      "startTime": 143.9,
      "endTime": 146,
      "visual": ""
    },
		{
      "lyric": "And you know we don't stop",
      "startTime": 146.1,
      "endTime": 148,
      "visual": ""
    },
		{
      "lyric": "Hot like (summer), ain't no (bummer)",
      "startTime": 148.1,
      "endTime": 140,
      "visual": ""
    },
		{
      "lyric": "You'll be like, 'Oh my God'",
      "startTime": 150.1,
      "endTime": 152.1,
      "visual": ""
    },
		{
      "lyric": "We gon' make you rock, and you say (yeah)",
      "startTime": 152.2,
      "endTime": 154.1,
      "visual": ""
    },
		{
      "lyric": "We gon' make you bounce, and you say (yeah)",
      "startTime": 155,
      "endTime": 156.9,
      "visual": ""
    },
		{
      "lyric": "Hotter, sweeter, cooler, butter!",
      "startTime": 157,
      "endTime": 159.1,
      "visual": ""
    },
		{
      "lyric": "Get it, let it roll",
      "startTime": 159.8,
      "endTime": 151.2,
      "visual": ""
    },
  ];

}


