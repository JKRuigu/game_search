// GAME CONTROLLER;
play = id =>{
if (id) {
	let value = document.getElementById(id).innerHTML;
	isPlayer?player1+=Number(value):player2+=Number(value);
	truthTable[getNumber(id)] = false;
	selected.push(getNumber(id));
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
	truthTable = check(column,row,selected);
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
	}

	truthTable = check(column,row,selected);

	if (getLeft() == 0) {
		let isDraw = player1 == player2? true:false;
		let msg = player1>player2?"ONE":"TWO";
		let sc = player1>player2?player1:player2;
		if( Number(localStorage.score) <sc ){
			localStorage.score = Number(sc);
			alert(`HIGHEST SCORE! ${sc}`);
		}
		if (!isDraw) {
			isSound?mariodie.play():"";
			alert(`PLAYER ${msg} WON`);
		}else{
			alert(`GAME ENDED AS DRAW`);			
		}
	}
	isPlayer=!isPlayer;
}else{
	console.log("ERROR .....",aiRandom(current));
	isError = true;
}
}

computer = current =>{
		let tempId = getMax(current,truthTable);
		console.log("A0");
		document.getElementById(tempId).class = "player1"
		play(tempId);
}

computer2 = (current,selected) =>{
	console.log("A1");
	let id = ids[getChoice(current,selected,row,column)];
	if (id) {
		play(id);
	}else{
		isError = true;
	}
}

computer3 = current=>{
	let id = ids[aiRandom(current)];
	play(id);
}

window.onload=function () {
	var myT = setInterval(()=>{
		// console.log(selected.length);
		// truthTable = check(column,row,selected);
		if (getLeft() !=0 && isPlayer && isAI) {
			computer2(current,selected);
		}
		if (getLeft() !=0 && !isPlayer && isAI) {
			if (aiLevel == 0) {
				computer(current,selected);
			}else if (aiLevel == 1) {
				computer2(current,selected);
			}else if (aiLevel == 2) {
				computer3(current,selected);
			}else{
				computer(current,selected);
			}
		}
		if (getLeft() ==0) {
			clearInterval(myT);			
		}
		if (isError) {
			console.log("clearInterval");
			clearInterval(myT);
		}
	},1000);
}