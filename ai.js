getMaxColumn = id =>{
	let data = getColumn(Number(String(id)[1])-1);
	let max = values[data[0]];
	let index = data[0];
	
	for (var i = 0; i < data.length; i++) {
		if (values[data[i]]>max) {
			max = values[data[i]];
			index = data[i];
		}
	}
	return index;
}

getMaxRow = id =>{
	let data = getRow(Number(id));
	let max = values[data[0]];
	let index = data[0];
	
	for (var i = 0; i < data.length; i++) {
		if (values[data[i]]>max) {
			max = values[data[i]];
			index = data[i];
		}
	}
	return index;
}

console.log(getMaxRow(current))