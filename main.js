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

initialize = (current,row,column,values=[],ids=[],truthTable=[])=>{
	// INTIALIZE GAME
	for (var i = 1; i <= row; i++) {
		for (var j = 1; j <= column; j++) {
			let ran = Math.floor(Math.random()*row);
			while(ran == 0){
				ran = Math.floor(Math.random()*row);
			}
			ids.push(String(i)+String(j));
			values.push(ran);
			document.getElementById(String(i)+String(j)).innerHTML = ran;
		}
	}

	// CREATES THE TRUTHTABLE;
	for (var i = 0; i < column; i++) {
		for (var j = 0; j < row; j++) {
			truthTable.push(true);
		}		
	}

}

initialize(current,row,column,values,ids,truthTable);

// SET CURRENT POSITION;
current = Math.floor(Math.random()*(column*row));
current = current==0?23:current;
//DEACTIVATE THE CURRENT NUMBER;
truthTable[current] = false;
// CONVERT TO ID;
current = ids[current];

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

// GAME CONTROLLER;
play = id =>{
	let value = document.getElementById(id).innerHTML;

	isPlayer?player1+=Number(value):player2+=Number(value);
	truthTable[getNumber(id)] = false;
	let player = isPlayer?"player1":"player2";
	if (lastPos) {
		addClass3(current)
	}else{
		addClass3(current)
	}
	if (isPlayer) {
		coin.play();
	}

	lastPos = current;
	current = Number(id);
	addClass(current,player);
	addClass2(id);

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
			mariodie.play()
			alert(`PLAYER ${msg} WON`);
		}else{
			alert(`GAME ENDED AS DRAW`);			
		}
		initialize(current,row,column,values,ids,truthTable);
	}
	isPlayer=!isPlayer;
	if (getLeft() !=0 && !isPlayer) {
		computer(current);
	}
}

computer = current =>{
	// setTimeout(()=>{
		let tempId = getMax(current);
		console.log("COMPUTER ",tempId);
		document.getElementById(tempId).class = "player1"
		play(tempId);
	// },2000)
}

//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (!validateColumn(current) && !validateRow(current) && getLeft() != 0) {
		if (truthTable[getNumber(e.target.id)]) {
			console.log("FULL");
			play(e.target.id)
		}
	}else{
		if (e.target.id != current) {
			if (validate(String(e.target.id),String(current))) {
				console.log("NORMAL");
				play(e.target.id)
			}
		}

	}

}

// CAPTURE CLICK;
document.addEventListener('click', function(e) {
	// CHECKS IF BUTTON IS CLICKED;
	if (e.target.id >=11 && e.target.id <=77 && getLeft() != 0) {
   	 setKey(e);
	}
});