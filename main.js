var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current = 23;

// ROW AND COLUMN VALIDATION;
validate = (id,current)=>{
	if (id[0] == current[0] || id[1] == current[1]) {
		return true;
	}	
}

//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (e.srcElement.id >=11 && e.srcElement.id <=99 && e.srcElement.id != current) {
		if (validate(String(e.srcElement.id),String(current))) {
			let value = document.getElementById(e.srcElement.id).innerHTML;

			isPlayer?player1+=Number(value):player2+=Number(value);
			isPlayer=!isPlayer;
			current = Number(e.srcElement.id);
			document.getElementById("player1").innerHTML = player1;
			document.getElementById("player2").innerHTML = player2;
		}
	}
}

// CAPTURE CLICK;
document.addEventListener('click', function(e) {
    setKey(e);
});