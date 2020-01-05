addClass = (id,player) =>{
	document.getElementById(id).classList.add(player);
}

addClass2 = id =>{
 	document.getElementById(id).classList.add("current");
}

addClass3 = id =>{
	document.getElementById(id).classList.add("current2");
}

soundBtn = bool=>{
	document.getElementById("sound").classList.remove(bool?"soundOff":"soundOn");	
	document.getElementById("sound").classList.add(!bool?"soundOff":"soundOn");	
}
toggleBtn = bool=>{
	document.getElementById("switch").classList.remove(bool?"human":"computer");	
	document.getElementById("switch").classList.add(!bool?"human":"computer");	
}