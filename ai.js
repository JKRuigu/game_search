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
	if (values[getMaxRow(id)]>values[getMaxColumn(id)]) {
		return ids[getMaxRow(id)]
	}else{
		return ids[getMaxColumn(id)]
	}
}