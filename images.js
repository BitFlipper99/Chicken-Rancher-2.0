var images = [
	{name = "chicken_eat", ext = "PNG", sprites = [32, 32, ["back0", "back1", "back2"], ["left0", "left1", "left2"], ["front0", "front1", "front2"], ["right0", "right1", "right2"]]}

];

for (let i = 0; i < images.length; i++) {

	for (let r = 0; r < images[i].sprites.length-2; r++) {

		for (let c = images[i].sprites[c+2].length + 2; p < images[i].sprites[j].length; c++){
			new_image.id = images[i].name;
			var new_image = document.createElement("IMG");
			new_image.width = images[i].sprites[0];
			new_image.height = images[i].sprites[1];
			new_image.id = images[i].sprites[r+2][c];
			new_image.style.background = "url(res/im/ " + images[i].name + "." + images[i].ext + ") " + r*32 + " " + c*32;
			new_image.style.display = "none";
			new_image.style.position = "fixed";
			document.body.appendChild(new_image);
		}

	}

}

