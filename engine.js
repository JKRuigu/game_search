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
	if (isPlayer && isSound) {
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

	if (getLeft() == 0) {
		let isDraw = player1 == player2? true:false;
		let msg = player1>player2?"ONE":"TWO";
		let sc = player1>player2?player1:player2;
		localStorage.score = localStorage.score==undefined?0:Number(localStorage.score);
		if( Number(localStorage.score) <sc ){
			alert(`HIGHEST SCORE! ${sc}`);
			localStorage.score = Number(sc);
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
	if (getLeft() !=0 && !isPlayer && isAI) {
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