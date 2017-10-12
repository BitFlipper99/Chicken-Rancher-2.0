var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
},

grassSet = {
	scale: [[], [], []]
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

	this.draw = function(ctx, x, y, scale){
		scale = scale || 1;
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width*scale, this.height*scale);
	}
}


function Creature(ctx, x, y, dir){
	this.ctx = ctx;
	this.x = x || 0;
	this.y = y || 0;
	this.dir = dir || 0;

	this.update = function(){



	}
}

function Chicken(ctx, x, y, dir){
	Creature.call(this, ctx, x, y, dir);

	this.state = 0;
	this.animArr = [chick_sp.back, chick_sp.right, chick_sp.front, chick_sp.left];
	this.currFrame = 0;

	this.draw = function(){
		let modFrame = (this.currFrame === 3) ? 1 : this.currFrame;
		this.animArr[this.dir][modFrame].draw(this.ctx, this.x, this.y, 1);
		if (this.state === 1 && frames%14 === 0	){
			if (this.currFrame === 3){
				this.currFrame = 0;
				this.state = 0;
			}	
			else {
				this.currFrame++;
			}
		}
	}

	this.feed = function(){
		this.animArr[this.dir][this.currFrame].draw(this.ctx, this.x, this.y);
		this.currFrame += (this.currFrame === 2) ? -2 : 1;
	}
	this.update = function(){

		if (this.currFrame == 0){
			if (Math.random() < .005){
				this.dir = Math.floor(Math.random()*4);
			}
			if (Math.random() < .005){
				this.state = 1;
			}
		}
	}

	this.render = function(){
		this.draw();
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
function initSpriteSheet(src, sc){
	let ind = Math.log(sc) / Math.log(2);
	for (let i = 0; i < 121; i++){
		grassSet.scale[ind].push(new Sprite(src, (1 + (i%11)*17)*sc, (1 + Math.floor(i/11)*17)*sc, 16*sc, 16*sc));
	}


}

function initSprites(){

	var imgPath = "res/im/";
	
	var imgNames = ["tilesheet.png", "scaled_tilesheet.png", "4xscaled_tilesheet.png"];
	for (let i = 0; i < 3; i++){
		img = new Image();
		img.onload = function() {
			initSpriteSheet(this, Math.pow(2, i));
		}
		img.src = imgPath + imgNames[i];
	}



	var img = new Image();
	img.onload = function() {
		initChicken(this);
		run();
	}
	img.src = imgPath + "chicken_eat.png";
}