
var

/*
	---Key---
	0: grass
	1: lite grass:
	2: sand:
	3: water:


*/

level1_d = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1 ],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2 ],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
],

level2_d = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];



function calcDir(surr, org){
	var eightBool = 0;
	for (let i = 0; i < surr.length; i++){
		eightBool << 1;
		if (surr[i] === org) eightBool++;
	}
	//TEMP SWITCH CASE
	switch(eightBool){ //me trying to figure out what sprite should display given every possibility (obviously I will make this a function once i figure it out)
		case 0:
			return 4;
		case 1:
			return 9;
		case 2:
			return 7;
		case 3:
			return 7;
		case 4:
			return 4;
		case 5:
			return 4;
		case 6:
			return 10;
		case 7:
			return ;
		case 8:
			return ;
		case 9:
			return ;
		case 10:
			return ;
		case 11:
			return ;
		case 12:
			return ;
		case 13:
			return ;
		case 14:
			return ;
		case 15:
			return ;
		case 16:
			return ;
		
	}

	

}

function Level(data){
	this.originalData = data;
	//This function should convert a map to an indexed sprite map.
	this.convertData = function(){
		var
		yArr = [-1, -1, -1, 0, 0, 1, 1, 1],
		xArr = [-1, 0, 1, -1, 1, -1, 0, 1];

		this.c_Data = new Array(this.originalData.length)
		for (let i = 0; i < this.originalData.length; i++){
			this.c_Data[i] = new Array(this.originalData[i].length);
		}
		for (let y = 0; y < data.length; y++){
			for (let x = 0; x < data[y].length; x++){
				switch(this.originalData[y][x]){
					case 0: this.c_Data[y][x] = 12;
						
					case 1: this.c_Data[y][x] = 45;
						
					case 2: this.c_Data[y][x] = 27;
				}
				let surrounding = [];
				for (let i = 0; i < 8; i++){
					if (this.originalData[y+yArr[i]][x+xArr[i]] !== 'undefined') surrounding[i] = this.originalData[y+yArr[i]][x+xArr[i]];
					else {surrounding[i] = this.originalData[y+yArr[i]][x+xArr[i]];}
				}

			}
		}
	}


	this.render = function(){
		for (let y = 0; y < this.c_Data.length; y++){
			for (let x = 0; x < this.c_Data[y].length; x++){
				grassSet.scale[1][this.c_Data[y][x]].draw(ctx, x*32, y*32);
			}
		}
	}

	/*
	this.randomize = function(){
		for (let i = 0; i < data[0].length*data.length; i++){
			if (Math.random() < 0.15){
				this.data[Math.floor(i/data[0].length)][i%data[0].length] += Math.floor(1+Math.random()*5)*10;
			
			}
		}

	}
	
	
	this.render = function(){
		var currRow,
		currCol,
		temp,
		xInd,
		yInd,
		foilage,
		tileChange,
		xIndArr = {-1, 0, 1, -1, 1, -1, 0, 1}; //FIND A MORE EFFICIENT WAY OF STORING THIS DATA
		for (let i = 0; i < data[0].length*data.length; i++){

			tileChange = 0;
			foilage = -1;
			currRow = i%32*32;
			currCol = Math.floor(i/32)*32;
			temp = data[Math.floor(i/data[0].length)][i%data[0].length];
			if (temp > 10){
				foilage = Math.floor(temp/10)-1;
			}
			if (temp !== 0){
				let fixVar = 0;
				for (let p = 0; p < 8; p++){
					xInd = Math.floor(i/data[0].length);
					xInd += xIndArr[p];
					
					yInd = i%data[0].length;
					yInd -= (p > 4) ? 2 : Math.floor(p/3);

					if (data[xInd][yInd] !== 'undefined' && temp%10 !== data[xInd][i%data[0].yInd];){
						fixVar += Math.pow(2,p);
					}
				}
				switch(fixVar){ //figure out an equation that returns a number of index to be the right graphic
					case 0:

						
					case 1:

						
					case 2:

						
					case 4:

						
					case 8:

						
					case 16:

						

				}
			}
			if (foilage > -1){
				switch(temp%10){
					case 0:
						grassSet.scale[1].grass.foilage[foilage-1].draw(ctx, currRow, currCol);
						
					case 1:
						grassSet.scale[1].grass.foilage[foilage+3].draw(ctx, currRow, currCol);
						
					case 2:
						grassSet.scale[1].sand.foilage[foilage].draw(ctx, currRow, currCol);
						
					case 3:
						grassSet.scale[1].water.foilage[foilage%3].draw(ctx, currRow, currCol);
						
				}
			}
			else{
				switch(temp%10){
					case 0:
						grassSet.scale[1].sand.grassy[4].draw(ctx, currRow, currCol);
						

					case 1:
						grassSet.scale[1].grass.lite[4].draw(ctx, currRow, currCol);
						
					case 2:
						grassSet.scale[1].sand.foilage[0].draw(ctx, currRow, currCol);
						
					case 3:
						grassSet.scale[1].water.grassy[4].draw(ctx, currRow, currCol);
						
				}
			}

		}
	}
	*/
}