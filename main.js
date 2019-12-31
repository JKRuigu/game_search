var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current =0;
var truthTable = [];
var values = [];
var ids = [];
var row = 7;
var column = 7;
var left = column*row-1;
var lastPos;
var coin = document.getElementById('coin');
var mariodie = document.getElementById('mariodie');
var isAI = true;

initialize(current,row,column,values,ids,truthTable);

function fX() {
	// SET CURRENT POSITION;
	current = Math.floor(Math.random()*(column*row));
	current = current==0?23:current;
	//DEACTIVATE THE CURRENT NUMBER;
	truthTable[current] = false;
	// CONVERT TO ID;
	current = ids[current];
}
fX();

function toggle() {
	isAI = !isAI;
	document.getElementById("switch").innerHTML =isAI?"COMPUTER":"HUMAN";
}

// MARKS OUT THE DEFAULT NUMBER IN THE GRID;
document.getElementById(current).innerHTML = "X";

// MARK POSITION;
addClass2(current);

// GETS THE INDEX NUMBER OF THE ID; MAX = column*row-1;
getNumber = (id)=>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
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

document.getElementById("left").innerHTML = getLeft();