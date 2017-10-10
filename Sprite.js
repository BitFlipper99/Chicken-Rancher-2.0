var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
},

grassSet = {
	scale: {
		{
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
		},
		{
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
		},
		{
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
		}
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

	//3 by 3 bricks
	for (let i = 0; i < 9; i++){
		//GrassSand
		scale[sc-1].grassSet.sand.grassy.push(new Sprite(src, (1 + i%3*17)*sc, (1 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));
		//MountainSand
		scale[sc-1].grassSet.sand.mountain.push(new Sprite(src, (52 + i%3*17)*sc, (103 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));

		//LiteGrass
		scale[sc-1].grassSet.grass.lite.push(new Sprite(src, (1 + i%3*17)*sc, (52 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));
		//MountainGrass
		scale[sc-1].grassSet.grass.mountain.push(new Sprite(src, (52 + i%3*17)*sc, (103 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));
		
		//mountainWater
		scale[sc-1].grassSet.water.grassy.push(new Sprite(src, (103 + i%3*17)*sc, (137 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));
	}
	//2 by 2 bricks
	for (let i = 0; i < 4; i++){	
		//SandyGrass
		scale[sc-1].grassSet.sand.grassy.push(new Sprite(src, (52, + i%2*17)*sc, (1 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));
		//SingleCornerMountainSand
		scale[sc-1].grassSet.sand.cornered.push(new Sprite(src, (120, + i%2*17)*sc, (69 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));
		//DoubleCornerMountainSand
		scale[sc-1].grassSet.sand.cornered.push(new Sprite(src, (120, + i%2*17)*sc, (103 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));


		//MoreLiteGrass
		scale[sc-1].grassSet.grass.lite.push(new Sprite(src, (52 + i%2*17)*sc, (35 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));
		//SingleCornerMountainGrass
		scale[sc-1].grassSet.grass.cornered.push(new Sprite(src, (52 + i%2*17)*sc, (69 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));
		//DoubleCornerMountainGrass
		scale[sc-1].grassSet.grass.cornered.push(new Sprite(src, (69 + i%2*17)*sc, (69 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));

		//waterGrassCorner
		scale[sc-1].grassSet.water.grassy.push(new Sprite(src, (154 + i%2*17)*sc, (120 + Math.floor(i/2)*17)*sc, 16*sc, 16*sc));

	//4 by 1 bricks
		//grassy foilage
		scale[sc-1].grassSet.grass.foilage.push(new Sprite(src, (86 + i*17)*sc, 1*sc, 16*sc, 16*sc));
		//lite grassy foilage
		scale[sc-1].grassSet.grass.foilage.push(new Sprite(src, (86 + i*17)*sc, 18*sc, 16*sc, 16*sc));

		//sand foilage
		scale[sc-1].grassSet.sand.foilage.push(new Sprite(src, (86 + i*17)*sc, 35*sc, 16*sc, 16*sc));

	}
	//3 by 2 bricks
	for (let i = 0; i < 6; i++){
		//Grass Mountain Extras 
		scale[sc-1].grassSet.grass.mountain.push(new Sprite(src, (1 + i%3*17)*sc, (154 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));
		//Sand Mountain Extras
		scale[sc-1].grassSet.sand.mountain.push(new Sprite(src, (52 + i%3*17)*sc, (154 + Math.floor(i/3)*17)*sc, 16*sc, 16*sc));

	}
	for (let i = 0; i < 2; i++){
		scale[sc-1].grassSet.grass.cornered.push(new Sprite(src, (86 + i*17)*sc, 52*sc, 16*sc, 16*sc));
		scale[sc-1].grassSet.sand.cornered.push(new Sprite(src, (86 + i*17)*sc, 52*sc, 16*sc, 16*sc));

		scale[sc-1].grassSet.water.foilage.push(new Sprite(src, (154*sc, (154 + i*17)*sc, 16*sc, 16*sc));
	}

	//misc sprites
		scale[sc-1].grassSet.sand.foilage.push(new Sprite(src, (154*sc, 35*sc, 16*sc, 16*sc));
		scale[sc-1].grassSet.water.foilage.push(new Sprite(src, (103*sc, 120*sc, 16*sc, 16*sc));



}


function initSprites(){
	var img = new Image();
	img.onload = function() {
		initChicken(this);
	}
	img.src = "res/im/chicken_eat.png";

	img = new Image();
	img.onload = function() {
		initSpriteSheet(this, 1);
		run();
	}
	img.src = "res/im/tilesheet.png";

	img = new Image();
	img.onload = function() {
		initSpriteSheet(this, 2);
		run();
	}
	img.src = "res/im/scaled_tilesheet.png";

	img = new Image();
	img.onload = function() {
		initSpriteSheet(this, 4);
		run();
	}
	img.src = "res/im/4xscaled_tilesheet.png";
}