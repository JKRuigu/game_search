var isPlayer = true;

var player1 = 0;
var player2 = 0;
var current = 23;


//GET BUTTON NUMBER AND ADJUST SCORE;
setKey = (e)=>{
	if (e.srcElement.id >=11 && e.srcElement.id <=99 && e.srcElement.id != current) {
		let value = document.getElementById(e.srcElement.id).innerHTML;

		isPlayer?player1+=Number(value):player2+=Number(value);
		isPlayer=!isPlayer;
		document.getElementById("player1").innerHTML = player1;
		document.getElementById("player2").innerHTML = player2;
	}
}

// CAPTURE CLICK;
document.addEventListener('click', function(e) {
    setKey(e);
});