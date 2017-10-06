var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
};

/*
function Sprite(copy){
	this.img = copy.img;
	this.x = copy.x;
	this.y = copy.y;
	this.width = copy.width;
	this.height = copy.height;
}
*/

function Sprite(img, x, y, width, height){
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	this.draw = function(ctx, x, y ){
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
	}
}


function Creature(ctx, x, y){
	this.ctx = ctx;
	this.x = x || 0;
	this.y = y || 0;

	this.update = function(){



	}
}

function Chicken(ctx, x, y){
	Creature.call(this, ctx, x, y);

	this.animArr = {chick_sp.back, chick_sp.right, chick_sp.front, chick_sp.left};
	this.currFrame = 0;
	this.feed(dir){
		animArr[dir][currFrame].draw(ctx, this.x, this.y);
		currFrame += (currFrame == 3) ? 1 : -3;
	}
	this.update = function(){

		if (currFrame == 0){
			if (Math.random() < .3){
				dir = Math.floor(Math.random()*3);
			}
			if (Math.random() < .1){
				this.feed();
			}
		}
		else{ //still feeding
			this.feed();
		}
	}

}

function initChicken(src){

	for (let i = 0; i < 12; i++){
		if (i < 3){
			chick_sp.back[i%3] = (new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));
		}
		else if (i < 6){
			chick_sp.left.push(new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));
		}
		else if (i < 9){
			chick_sp.front.push(new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));
		}
		else {
			chick_sp.right.push(new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));
		}
	}
}


function initSprites(){
	var img = new Image();
	img.onload = function() {
		initChicken(this);
		run();	
	}
	img.src = "res/im/chicken_eat.png";

	
}