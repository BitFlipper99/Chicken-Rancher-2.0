var canvas = document.getElementById('canvas');
canvas.className = "pixelated";
if (!(!!canvas.getContext && canvas.getContext("2d"))) {
		alert("Your browser doesn't support HTML5, please update to latest version");
	}
var

currLevel,
level1 = new Level(level1_d);
chickens = new Array(),
ctx = canvas.getContext("2d"),
ctx.webkitImageSmoothingEnabled = ctx.imageSmoothingEnabled = ctx.mozImageSmoothingEnabled = ctx.oImageSmoothingEnabled = false;
width = 1024,
height = 544,

frames = 0,
eggs = 0,
currentstate = 0,
states = {
	Splash: 0, mainGame : 1
};

level1.randomize();

// Game objects

function update(){
	for (let i = 0; i < chickens.length; i++){
		chickens[i].update();
	}
}

function render(){
	ctx.fillRect(0, 0, width, height);
	currLevel.render();
 	
	for (let i = 0; i < chickens.length; i++){
		chickens[i].render();
	}



}
 	
function run(){
	for (let i = 0; i < 100; i++)
		chickens[i] = new Chicken(ctx, Math.random()*width-10, Math.random()*height-10, i%4);
	var loop = function(){
		update();
		render();
		window.requestAnimationFrame(loop, ctx);
		frames++;
	}
	loop();
}

function startGame(){

	canvas.width = width;
	canvas.height = height;
		currLevel = level1;


	initSprites();
	

	/*
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');

                //Loading of the home test image - img1
                var img1 = new Image();
                img1.src = 'res/im/chicken_eat.png';

                //drawing of the test image - img1
                img1.onload = function () {
                    //draw background image
                    ctx.drawImage(img1, 0, 0);
                    //draw a box over the top
                    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
                    ctx.rect(0, 0, 540, 360);
					ctx.stroke();

                };
            }
    */
}
