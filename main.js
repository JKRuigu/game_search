var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current = 13;
var truthTable = [];
var row = 4;
var column = 4;

for (var i = 0; i < column; i++) {
	for (var j = 0; j < row; j++) {
		truthTable.push(true);
	}		
}
getNumber = (id)=>{
	if (Number(Number(String(id)[0])) !=1) {
		return ((Number(String(id)[0])-1)*column+Number(String(id)[1]))-1;
	}
	return (Number(String(id)[1]))-1;
} 

//DEACTIVATE THE CURRENT NUMBER;
truthTable[getNumber(current)] = false;

document.getElementById(current).innerHTML = "H";


// ROW AND COLUMN VALIDATION;
validate = (id,current)=>{
	if (id[0] == current[0] || id[1] == current[1]) {
		if (truthTable[getNumber(id)]) {
			return true;
		}
	}	
}

//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (e.srcElement.id >=11 && e.srcElement.id <=99 && e.srcElement.id != current) {
		if (validate(String(e.srcElement.id),String(current))) {
			let value = document.getElementById(e.srcElement.id).innerHTML;

			isPlayer?player1+=Number(value):player2+=Number(value);
			isPlayer=!isPlayer;
			truthTable[getNumber(e.srcElement.id)] = false;
			current = Number(e.srcElement.id);
			console.log(truthTable);
			document.getElementById("player1").innerHTML = player1;
			document.getElementById("player2").innerHTML = player2;
		}
	}
}

// CAPTURE CLICK;
document.addEventListener('click', function(e) {
    setKey(e);
});