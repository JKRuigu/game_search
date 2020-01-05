getMaxColumn = (id,truthTable) =>{
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

getMaxRow = (id,truthTable) =>{
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

getMax = (id,truthTable) =>{
	if (getMaxColumn(id,truthTable) == undefined && getMaxRow(id,truthTable) != undefined) {
		// console.log("A");
		return ids[getMaxRow(id,truthTable)];
	}else if (getMaxColumn(id,truthTable) != undefined && getMaxRow(id,truthTable) == undefined) {
		// console.log("B");
		return ids[getMaxColumn(id,truthTable)];
	}else if (getMaxColumn(id,truthTable) == undefined && getMaxRow(id,truthTable) == undefined) {
		for (var i = 0; i < truthTable.length; i++) {
			if (truthTable[i]) {
			// console.log("C");
				return ids[i];
			}
		}
	}else{
		// console.log(values[getMaxColumn(id,truthTable)],values[getMaxRow(id,truthTable)])
		if (values[getMaxRow(id,truthTable)]> values[getMaxColumn(id,truthTable)]) {
			// console.log("C");
			return ids[getMaxRow(id,truthTable)];
		}else{
			// console.log("E");
			return ids[getMaxColumn(id,truthTable)];
		}
	}

}