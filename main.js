var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current =0;
var truthTable = [];
var truthTable2 = [];
var truthTable3 = [];
var values = [];
var ids = [];
var row = 7;
var column = 7;
var left = column*row-1;
var lastPos;
var coin = document.getElementById('coin');
var mariodie = document.getElementById('mariodie');
var isAI = false;
var aiLevel = 0;
var isSound = false;
var isError = false;

initialize(current,row,column,values,ids,truthTable);

function fX() {
	// SET CURRENT POSITION;
	current = Math.floor(Math.random()*(column*row));
	current = current==0?23:current;
	//DEACTIVATE THE CURRENT NUMBER;
	truthTable[current] = false;
	truthTable2[current] = false;
	truthTable3[current] = false;
	// CONVERT TO ID;
	current = ids[current];
}
fX();

function toggle() {
	if (isAI == true && aiLevel != 2) {
		aiLevel++;
	}else{
		aiLevel = 0;
		isAI = !isAI;
		toggleBtn(isAI);		
	}
	document.getElementById("switch").innerHTML =isAI?`COMPUTER ${aiLevel}`:"HUMAN";
}

function sound() {
	isSound = !isSound;
	soundBtn(isSound);
	isSound?coin.play():"";
	document.getElementById("sound").innerHTML =isSound?"SOUND ON":"SOUND OFF";	
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