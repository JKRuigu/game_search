var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current = 23;
var truthTable = [];
var row = 4;
var column = 4;
var left = column*row-1;

// INTIALIZE GAME
for (var i = 1; i <= row; i++) {
	for (var j = 1; j <= column; j++) {
		let ran = Math.floor(Math.random()*9);
		while(ran == 0){
			ran = Math.floor(Math.random()*9);
		}

		document.getElementById(String(i)+String(j)).innerHTML = ran;
	}
}


// CREATES THE TRUTHTABLE;
for (var i = 0; i < column; i++) {
	for (var j = 0; j < row; j++) {
		truthTable.push(true);
	}		
}

// GETS THE INDEX NUMBER OF THE ID; MAX = column*row-1;
getNumber = (id)=>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
} 

//DEACTIVATE THE CURRENT NUMBER;
truthTable[getNumber(current)] = false;

// MARKS OUT THE DEFAULT NUMBER IN THE GRID;
document.getElementById(current).innerHTML = "X";

// ROW AND COLUMN VALIDATION;
validate = (id,current)=>{
	if (id[0] == current[0] || id[1] == current[1]) {
		if (truthTable[getNumber(id)]) {
			return true;
		}
	}	
}

// GETS THE TOTAL UNSELECTED NUMBER IN THE GRID;
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
validateRow = id =>{
	id = Number(id);
	var isTrue = false;
	var data = getRow(id);

	for (var i = data[0]; i <data.length; i++) {
		if (truthTable[j]) {
			isTrue = true;
			break;
		}
	}

	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}

// CHECKS WHEATHER THE COLUMN IS FULL;
validateColumn = (id)=>{
	id = Number(String(id)[1])-1;
	isTrue = false;
	let data = getColumn(id);

	for (var i = data[0]; i< data.length; i++) {
		if (truthTable[i]) {
			isTrue = true;
			break;
		}
	}

	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}

console.log(validateColumn(current));

// GAME CONTROLLER;
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

	if (getLeft() == 0) {
		let isDraw = player1 == player2? true:false;
		let msg = player1>player2?"ONE":"TWO";
		if (!isDraw) {
			alert(`PLAYER ${msg} WON`);
		}else{
			alert(`GAME ENDED AS DRAW`);			
		}
	}
	isPlayer=!isPlayer;
}
//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (!validateColumn(current) && !validateRow(current) && getLeft() != 0) {
		if (truthTable[getNumber(e.srcElement.id)]) {
			console.log("FULL");
			play(e.srcElement.id)
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