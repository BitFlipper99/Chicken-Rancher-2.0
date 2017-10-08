var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
},

grassSet = {
	sand: {
		grassy: new Array(),
		mountain: new Array(),
		foilage: new Array(),
		cornered: new Array()
	},
	grass: {
		lite: new Array(),
		mountain: new Array(),
		foilage: new Array(),
		cornered: new Array()
	},
	water: {
		grassy: new Array(),
		foilage: new Array(),

	},
	misc: {
	}
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

function initSpriteSheet(src){

	//3 by 3 bricks
	for (let i = 0; i < 9; i++){
		//GrassSand
		grassSet.sand.grassy.push(new Sprite(src, 1 + i%3*17, 1 + Math.floor(i/3)*17, 16, 16));
		//MountainSand
		grassSet.sand.mountain.push(new Sprite(src, 52 + i%3*17, 103 + Math.floor(i/3)*17, 16, 16));

		//LiteGrass
		grassSet.grass.lite.push(new Sprite(src, 1 + i%3*17, 52 + Math.floor(i/3)*17, 16, 16));
		//MountainGrass
		grassSet.grass.mountain.push(new Sprite(src, 52 + i%3*17, 103 + Math.floor(i/3)*17, 16, 16));
		
		//mountainWater
		grassSet.water.grassy.push(new Sprite(src, 103 + i%3*17, 137 + Math.floor(i/3)*17, 16, 16));
	}
	//2 by 2 bricks
	for (let i = 0; i < 4; i++){	
		//SandyGrass
		grassSet.sand.grassy.push(new Sprite(src, 52, + i%2*17, 1 + Math.floor(i/2)*17, 16, 16));
		//SingleCornerMountainSand
		grassSet.sand.cornered.push(new Sprite(src, 120, + i%2*17, 69 + Math.floor(i/2)*17, 16, 16));
		//DoubleCornerMountainSand
		grassSet.sand.cornered.push(new Sprite(src, 120, + i%2*17, 103 + Math.floor(i/2)*17, 16, 16));


		//MoreLiteGrass
		grassSet.grass.lite.push(new Sprite(src, 52 + i%2*17, 35 + Math.floor(i/2)*17, 16, 16));
		//SingleCornerMountainGrass
		grassSet.grass.cornered.push(new Sprite(src, 52 + i%2*17, 69 + Math.floor(i/2)*17, 16, 16));
		//DoubleCornerMountainGrass
		grassSet.grass.cornered.push(new Sprite(src, 69 + i%2*17, 69 + Math.floor(i/2)*17, 16, 16));

		//waterGrassCorner
		grassSet.water.grassy.push(new Sprite(src, 154 + i%2*17, 120 + Math.floor(i/2)*17, 16, 16));

	//4 by 1 bricks
		//grassy foilage
		grassSet.grass.foilage.push(new Sprite(src, 86 + i*17, 1, 16, 16));
		//lite grassy foilage
		grassSet.grass.foilage.push(new Sprite(src, 86 + i*17, 18, 16, 16));

		//sand foilage
		grassSet.sand.foilage.push(new Sprite(src, 86 + i*17, 35, 16, 16));

	}
	//3 by 2 bricks
	for (let i = 0; i < 6; i++){
		//Grass Mountain Extras
		grassSet.grass.mountain.push(new Sprite(src, 1 + i%3*17, 154 + Math.floor(i/3)*17, 16, 16));
		//Sand Mountain Extras
		grassSet.sand.mountain.push(new Sprite(src, 52 + i%3*17, 154 + Math.floor(i/3)*17, 16, 16));

	}
	for (let i = 0; i < 2; i++){
		grassSet.grass.cornered.push(new Sprite(src, 86 + i*17, 52, 16, 16));
		grassSet.sand.cornered.push(new Sprite(src, 86 + i*17, 52, 16, 16));

		grassSet.water.foilage.push(new Sprite(src, 154, 154 + i*17, 16, 16));
	}

	//misc sprites
		grassSet.sand.foilage.push(new Sprite(src, 154, 35, 16, 16));
		grassSet.water.foilage.push(new Sprite(src, 103, 120, 16, 16));



}


function initSprites(){
	var img = new Image();
	img.className = "pixelated";
	img.onload = function() {
		initChicken(this);
	}
	img.src = "res/im/chicken_eat.png";

	img = new Image();
	img.classList.add('pixelated');
	img.onload = function() {
		initSpriteSheet(this);
		run();
	}
	img.src = "res/im/tilesheet.png";
}