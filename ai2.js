getMax2 = (id,t1) =>{
	if (getMaxColumn(id,t1) == undefined && getMaxRow(id,t1) != undefined) {
		// console.log("A");
		return ids[getMaxRow(id,t1)];
	}else if (getMaxColumn(id,t1) != undefined && getMaxRow(id,t1) == undefined) {
		// console.log("B");
		return ids[getMaxColumn(id,t1)];
	}else if (getMaxColumn(id,t1) == undefined && getMaxRow(id,t1) == undefined) {
		for (var i = 0; i < t1.length; i++) {
			if (t1[i]) {
			// console.log("C");
				return ids[i];
			}
		}
	}else{
		// console.log(values[getMaxColumn(id,t1)],values[getMaxRow(id,t1)])
		if (values[getMaxRow(id,t1)]> values[getMaxColumn(id,t1)]) {
			// console.log("C");
			return ids[getMaxRow(id,t1)];
		}else{
			// console.log("E");
			return ids[getMaxColumn(id,t1)];
		}
	}
}


getLeft2 = table =>{
	var n = 0;
	for (var i = 0; i < table.length; i++) {
		if (table[i] == true) {
			n++;
		}
	}
	return n;
}

getBest = (current,t3) =>{
	var xTable = t3;
	let score1 = 0;
	let score2 = 0;

	// LEVEL 1;
	let max = getMax2(current,xTable); 
	xTable[getNumber(max)] = false;
	score1 += values[getNumber(max)];
	// LEVEL 2;
	let max2 = getMax2(max,xTable); 
	xTable[getNumber(max2)] = false;
	score2 += values[getNumber(max2)];

	// LEVEL 3;
	let max3 = getMax2(max2,xTable); 
	xTable[getNumber(max3)] = false;
	score1 += values[getNumber(max3)];

	// LEVEL 4;
	let max4 = getMax2(max3,xTable); 
	xTable[getNumber(max4)] = false;
	score2 += values[getNumber(max4)];

	// LEVEL 5;
	let max5 = getMax2(max4,xTable); 
	xTable[getNumber(max5)] = false;
	score1 += values[getNumber(max5)];

	// LEVEL 6;
	let max6 = getMax2(max5,xTable); 
	xTable[getNumber(max6)] = false;
	score2 += values[getNumber(max6)];

	// LEVEL 7;
	let max7 = getMax2(max6,xTable); 
	xTable[getNumber(max7)] = false;
	score1 += values[getNumber(max7)];

	// LEVEL 8;
	let max8 = getMax2(max7,xTable); 
	xTable[getNumber(max8)] = false;
	score2 += values[getNumber(max8)];

	let scores = [];
	scores[0]= score1;
	scores[1]= score2;
	// console.log(getLeft2(xTable));
	return scores;
}

getChoice = (current,selected,row,column) =>{
	truthTable = check(column,row,selected);
	let maxCol2 = getMaxColumn(current,truthTable);
	let maxRow2 = getMaxRow(current,truthTable);

	truthTable = check(column,row,selected);
	let r2 = getBest(maxCol2,truthTable);

	truthTable = check(column,row,selected);
	let r3 = getBest(maxRow2,truthTable);

	let diff = r2[0]-r2[1];
	let diff2 = r3[0]-r3[1];
	let myChoice = diff>diff2?maxCol2:maxRow2;

	if (maxCol2 == undefined || maxRow2 == undefined) {
		truthTable = check(column,row,selected);
		return getNumber(getMax(current,truthTable));
	}
	return myChoice;
}

check = (column,row,selected)=>{
	table = [];
	for (var i = 0; i < column; i++) {
		for (var j = 0; j < row; j++) {
			table.push(true);
		}		
	}
	for (var i = 0; i < selected.length; i++) {
		let index = selected[i];
		table[index] = false;
	}
	return table;
}
truthTable = check(column,row,selected);

console.log(getChoice(current,selected,row,column));
console.log(getLeft2(truthTable));