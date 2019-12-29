getMaxColumn = id =>{
	let data = getColumn(Number(String(id)[1])-1);
	let max = 0;
	let index;
	let indexMax;
	
	for (var i = 0; i < data.length; i++) {
		index = data[i];
		if (truthTable[index]) {
			if (values[data[i]]>max) {
				max = values[data[i]];
				indexMax = data[i];
			}
		}
	}
	return indexMax;
}

getMaxRow = id =>{
	let data = getRow(Number(id));
	let max = 0;
	let index;
	let indexMax;
	
	for (var i = 0; i < data.length; i++) {
		index = data[i];
		if (truthTable[data[i]]) {
			if (values[data[i]]>max) {
				max = values[data[i]];
				indexMax = data[i];
			}
		}
	}
	return indexMax;
}

getMax = id =>{
	console.log(validateColumn(id),validateRow(id))
	if (validateColumn(id) && validateRow(id)) {
		console.log("A");
		if (values[getMaxRow(id)]>values[getMaxColumn(id)]) {
			return ids[getMaxRow(id)]
		}else{
			return ids[getMaxColumn(id)]
		}		
	}else if (!validateColumn(id) && validateRow(id)) {
		console.log("B");
		return ids[getMaxRow(id)];
	}else if (validateColumn(id) && !validateRow(id)) {
		console.log("C");
		return ids[getMaxColumn(id)];
	}else if (!validateColumn(id) && !validateRow(id)) {
		console.log("D");
		for (var i = 0; i < truthTable.length; i++) {
		console.log(truthTable[i]);
			if (truthTable[i]) {
				return ids[i];				
			}
		}
	}

}