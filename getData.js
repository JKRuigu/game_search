// GETS ROW DATA;
getRow = id =>{
	var min  = 0;
	var max = 0;
	var numX = getNumber(id)+1;
	let data = [];

	for (var i = 0; i <=column*row; i+=row) {
		if (i !=0) {
			min = max;
			max = i;

			if (numX >min && numX<=max) {
				min = min==0?0:min;
				for (var j = min; j < max; j++) {
					data.push(j);
				}
				break;
			}
		}
	}
	return data;
}

// GET COLUMN DATA;
getColumn = id =>{
	let data = [];
	for (var i = 0; i< column*row; i+=row) {
		data.push(i+id);
	}
	return data;
}