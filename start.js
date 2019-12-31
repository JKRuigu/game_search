initialize = (current,row,column,values=[],ids=[],truthTable=[])=>{
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

	// console.log();

	// INTIALIZE GAME
	for (var i = 1; i <= row; i++) {
		let list = shuffleWords(num);
		for (var j = 1; j <= column; j++) {
			// let ran = Math.floor(Math.random()*row);
			// while(ran == 0){
			// 	ran = Math.floor(Math.random()*row);
			// }
			console.log(list[j-1]);
			ids.push(String(i)+String(j));
			values.push(list[j-1]);
			document.getElementById(String(i)+String(j)).innerHTML = list[j-1];
		}
		console.log(list);
	}

	// CREATES THE TRUTHTABLE;
	for (var i = 0; i < column; i++) {
		for (var j = 0; j < row; j++) {
			truthTable.push(true);
		}		
	}

}

document.getElementById("highest").innerHTML = localStorage.score==undefined?0:Number(localStorage.score);;