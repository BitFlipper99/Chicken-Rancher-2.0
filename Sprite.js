var

chick_sp = {
	back: new Array(),
	front: new Array(),
	right: new Array(),
	left: new Array()
};

function Sprite(img, x, y, width, height){
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Sprite.prototype.draw = function(ctx, x, y){
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
}

function initChicken(src){

	for (let i = 0; i < 12; i++){
		if (i < 3){
			console.log("back ran");
			chick_sp.back[i%3] = (new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));

		}
		else if (i < 6){
			console.log("left ran");
			chick_sp.left.push(new Sprite(src, (i%3)*32, Math.floor(i/3)*32, 32, 32));
		}
		else if (i < 9){
			console.log("front ran");
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