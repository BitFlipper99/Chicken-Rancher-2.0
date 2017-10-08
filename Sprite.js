var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
};

grassSet = {
	sand: [new Array(), new Array(), new Array(), new Array()],
	grass: [new Array(), new Array(), new Array(), new Array()],
	water: [new Array(), new Array(), new Array()],
	misc: [new Array(), new Array(), new Array()]
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
		this.animArr[this.dir][modFrame].draw(this.ctx, this.x, this.y);
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
				this.dir = Math.floor(Math.random()*3);
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

function initSpriteSheet(src){

	//9 by 9 bricks
	for (let i = 0; i < 9; i++){
		//GrassSand
		grassSet.sand[0].push(new Sprite(src, 1 + i%3*17, 1 + Math.floor(i/3)*17, 16, 16));
		//MountainSand
		grassSet.sand[1].push(new Sprite(src, 52 + i%3*17, 103 + Math.floor(i/3)*170, 16, 16));

		//LiteGrass
		grassSet.grass[0].push(new Sprite(src, 1 + i%3*17, 52 + Math.floor(i/3)*17, 16, 16));
		//MountainGrass
		grassSet.grass[1].push(new Sprite(src, 52 + i%3*17, 103 + Math.floor(i/3)*17, 16, 16));
		
		//mountainWater
		grassSet.water[0].push(new Sprite(src, 103 + i%3*17, 137 + Math.floor(i/3)*17, 16, 16));
	}
	//4 by 4 bricks
	for (let i = 0; i < 4; i++){
		//SandyGrass
		grassSet.sand[2].push(new Sprite(src, 52, + i%2*17, 1 + Math.floor(i/2)*17, 16, 16));
		//SingleCornerMountainSand
		grassSet.sand[3].push(new Sprite(src, 120, + i%2*17, 69 + Math.floor(i/2)*17, 16, 16));

		//MoreLiteGrass
		grassSet.grass[2].push(new Sprite(src, 52 + i%2*17, 35 + Math.floor(i/2)*17, 16, 16));
		//SingleCornerMountainGrass
		grassSet.grass[3].push(new Sprite(src, 52 + i%2*17, 69 + Math.floor(i/2)*17, 16, 16));


	}
	//3 by 2 bricks
	for (let i = 0; i < 6; i++){

	}



}


function initSprites(){
	var img = new Image();
	img.onload = function() {
		initChicken(this);
	}
	img.src = "res/im/chicken_eat.png";

	img = new Image();
	img.onload = function() {
		initSpriteSheet(this);
		run();
	}
	img.src = "res/im/tilesheet.png";
}