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
	if (getMaxColumn(id) == undefined && getMaxRow(id) != undefined) {
		console.log("A");
		return ids[getMaxRow(id)];
	}else if (getMaxColumn(id) != undefined && getMaxRow(id) == undefined) {
		console.log("B");
		return ids[getMaxColumn(id)];
	}else if (getMaxColumn(id) == undefined && getMaxRow(id) == undefined) {
		for (var i = 0; i < truthTable.length; i++) {
			if (truthTable[i]) {
			console.log("C");
				return ids[i];
			}
		}
	}else{
		console.log(values[getMaxColumn(id)],values[getMaxRow(id)])
		if (values[getMaxRow(id)]> values[getMaxColumn(id)]) {
			console.log("C");
			return ids[getMaxRow(id)];
		}else{
			console.log("E");
			return ids[getMaxColumn(id)];
		}
	}

}