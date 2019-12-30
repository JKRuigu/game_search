// ROW AND COLUMN VALIDATION;
validate = (id,current)=>{
	if (id[0] == current[0] || id[1] == current[1]) {
		if (truthTable[getNumber(id)]) {
			return true;
		}
	}	
}

// CHECKS WHEATHER THE ROW IS FULL;
validateRow = id =>{
	id = Number(id);
	var isTrue = false;
	var data = getRow(id);

	for (var i = data[0]; i <data.length; i++) {
		if (truthTable[i]) {
			isTrue = true;
			break;
		}
	}

	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}

// CHECKS WHEATHER THE COLUMN IS FULL;
validateColumn = (id)=>{
	id = Number(String(id)[1])-1;
	isTrue = false;
	let data = getColumn(id);

	for (var i = data[0]; i< data.length; i++) {
		if (truthTable[i]) {
			isTrue = true;
			break;
		}
	}

	return isTrue;//RETURNS TRUE IS ROW IS NOT FULL;
}
