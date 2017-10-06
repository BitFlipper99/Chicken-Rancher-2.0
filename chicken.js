var canvas = document.getElementById('canvas');
if (!(!!canvas.getContext && canvas.getContext("2d"))) {
		alert("Your browser doesn't support HTML5, please update to latest version");
	}
var

ctx = canvas.getContext("2d"),
width,
height,

frames = 0,
eggs = 0,
currentstate,
states = {
	Splash: 0, mainGame : 1
},

// Game objects

okbtn;

 	
function run(){
	chick_sp.back[0].draw(ctx, 100, 100);
	}

function startGame(){

	width = window.innerWidth;
	height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;

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
