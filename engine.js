// GAME CONTROLLER;
play = id =>{
	let value = document.getElementById(id).innerHTML;
	// console.log(id,value,player1,player2);
	if (player1 <0) {
		isError = true;
	}
		// console.log(player1.Attr,window.isNaN("player1"))

	isPlayer?player1+=Number(value):player2+=Number(value);
	truthTable[getNumber(id)] = false;
	let player = isPlayer?"player1":"player2";
	if (lastPos) {
		addClass3(current)
	}else{
		addClass3(current)
	}
	if (isSound) {
		coin.play();
	}

	lastPos = current;
	current = Number(id);	
	document.getElementById("left").innerHTML = getLeft();
	addClass(current,player);
	addClass2(id);

	if (isPlayer) {
		document.getElementById("player1").innerHTML = player1;
		document.getElementById(current).innerHTML ="P1";
	}else{
		document.getElementById("player2").innerHTML = player2;
		document.getElementById(current).innerHTML ="P2";
	}

	let sc2 = player1>player2?player1:player2;
	localStorage.score = localStorage.score==undefined?0:Number(localStorage.score);
	if( Number(localStorage.score) <sc2 ){
			document.getElementById("highest").innerHTML = sc2;
			localStorage.score = Number(sc2);
	}

	if (getLeft() == 0) {
		let isDraw = player1 == player2? true:false;
		let msg = player1>player2?"ONE":"TWO";
		let sc = player1>player2?player1:player2;
		if( Number(localStorage.score) <sc ){
			alert(`HIGHEST SCORE! ${sc}`);
			// document.getElementById("highest").innerHTML = sc;
			// localStorage.score = Number(sc);
		}
		if (!isDraw) {
			isSound?mariodie.play():"";
			alert(`PLAYER ${msg} WON`);
		}else{
			alert(`GAME ENDED AS DRAW`);			
		}
		// initialize(current,row,column,values,ids,truthTable);
		// fX();
	}
	isPlayer=!isPlayer;
}

computer = current =>{
		let tempId = getMax(current,truthTable);
		console.log("A0");
		document.getElementById(tempId).class = "player1"
		play(tempId);
}

computer2 = (current,truthTable,truthTable2) =>{
	console.log("A1");

	truthTable3[getNumber(current)] = false;
	let id = ids[getChoice(current,truthTable,truthTable2)];
	if (id) {
		play(id);
	}else{
		isError = true;
	}
}


// window.onload=function () {
// 	var myT = setInterval(()=>{
// 		// console.log(getLeft(),isError,current);
// 		truthTable3[getNumber(current)] = false;
// 		if (getLeft() !=0 && !isPlayer && isAI) {
// 			computer(current);
// 			// computer2(current,truthTable,truthTable2);
// 		}
// 		if (getLeft() !=0 && isPlayer && isAI) {
// 			computer(current);
// 		}
// 		if (isError) {
// 			console.log("clearInterval");
// 			clearInterval(myT);
// 		}
// 	},2000);
// }