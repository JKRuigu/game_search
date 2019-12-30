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