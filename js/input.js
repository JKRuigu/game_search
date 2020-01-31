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