initialize = (current,row,column,values=[],ids=[],truthTable=[])=>{

	document.getElementById("switch").innerHTML =isAI?`COMPUTER ${aiLevel}`:"HUMAN";
	toggleBtn(isAI);
	
	let num = [1,2,3,4,5,6,7];

	function shuffleWords(list) {
	  var j, x, i;
	  for (i = list.length - 1; i > 0; i--) {
	    j = Math.floor(Math.random() * (i + 1));
	    x = list[i];
	    list[i] = list[j];
	    list[j] = x;
	  }

	  return list;
	}

	// INTIALIZE GAME
	for (var i = 1; i <= row; i++) {
		let list = shuffleWords(num);
		for (var j = 1; j <= column; j++) {
			ids.push(String(i)+String(j));
			values.push(list[j-1]);
			document.getElementById(String(i)+String(j)).innerHTML = list[j-1];
		}
	}

	// CREATES THE TRUTHTABLE;
	for (var i = 0; i < column; i++) {
		for (var j = 0; j < row; j++) {
			truthTable.push(true);
			truthTable2.push(true);
			truthTable3.push(true);
		}		
	}

}

document.getElementById("highest").innerHTML = localStorage.score==undefined?0:Number(localStorage.score);;