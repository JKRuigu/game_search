var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current = 23;
var truthTable = [];
var row = 4;
var column = 4;
var left = column*row-1;

for (var i = 0; i < column; i++) {
	for (var j = 0; j < row; j++) {
		truthTable.push(true);
	}		
}
getNumber = (id)=>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
} 

//DEACTIVATE THE CURRENT NUMBER;
truthTable[getNumber(current)] = false;

document.getElementById(current).innerHTML = "X";


// ROW AND COLUMN VALIDATION;
validate = (id,current)=>{
	if (id[0] == current[0] || id[1] == current[1]) {
		if (truthTable[getNumber(id)]) {
			return true;
		}
	}	
}

getLeft = ()=>{
	var n = 0;
	for (var i = 0; i < truthTable.length; i++) {
		if (truthTable[i] == true) {
			n++;
		}
	}
	return n;
}

// CHECKS WHEATHER THE ROW IS FULL;
validateRow = (id)=>{
	id = Number(id);
	var min  = 0;
	var max = 0;
	var numX = getNumber(id)+1;
	var isTrue = false;

	for (var i = 0; i <=column*row; i+=row) {
		if (i !=0) {
			min = max;
			max = i;

			if (numX >min && numX<=max) {
				min = min==0?0:min;
				for (var j = min; j < max; j++) {
					if (truthTable[j]) {
						isTrue = true;
						break;
					}
				}
				break;
			}
		}
	}
	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}

// CHECKS WHEATHER THE COLUMN IS FULL;
validateColumn = (id)=>{
	id = Number(String(id)[1])-1;
	isTrue = false;
	for (var i = 0; i< column*row; i+=row) {
		if (truthTable[i+id]) {
			isTrue = true;
			break;
		}
	}
	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}

play = id =>{
	let value = document.getElementById(id).innerHTML;

	isPlayer?player1+=Number(value):player2+=Number(value);
	truthTable[getNumber(id)] = false;
	current = Number(id);
	if (isPlayer) {
		document.getElementById("player1").innerHTML = player1;
		document.getElementById(current).innerHTML ="P1";
	}else{
		document.getElementById("player2").innerHTML = player2;
		document.getElementById(current).innerHTML ="P2";

	}
	isPlayer=!isPlayer;
	// console.log(getLeft());
	if (getLeft() == 0) {
		console.log("GAME OVER")
	}
}
//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (!validateColumn(current) && !validateRow(current) && getLeft() != 0) {
			console.log("FULL");
		if (validate(String(e.srcElement.id),String(current))) {
			// play(e.srcElement.id)
		}
	}else{
		if (e.srcElement.id != current) {
			if (validate(String(e.srcElement.id),String(current))) {
				console.log("NORMAL");
				play(e.srcElement.id)
			}
		}

	}

}

// CAPTURE CLICK;
document.addEventListener('click', function(e) {
	// CHECKS IF BUTTON IS CLICKED;
	if (e.srcElement.id >=11 && e.srcElement.id <=44 && getLeft() != 0) {
   	 setKey(e);
	}
});