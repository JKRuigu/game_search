getMax2 = (id,truthTable210) =>{
	if (getMaxColumn(id,truthTable210) == undefined && getMaxRow(id,truthTable210) != undefined) {
		// console.log("A");
		return ids[getMaxRow(id,truthTable210)];
	}else if (getMaxColumn(id,truthTable210) != undefined && getMaxRow(id,truthTable210) == undefined) {
		// console.log("B");
		return ids[getMaxColumn(id,truthTable210)];
	}else if (getMaxColumn(id,truthTable210) == undefined && getMaxRow(id,truthTable210) == undefined) {
		for (var i = 0; i < truthTable210.length; i++) {
			if (truthTable210[i]) {
			// console.log("C");
				return ids[i];
			}
		}
	}else{
		// console.log(values[getMaxColumn(id,truthTable210)],values[getMaxRow(id,truthTable210)])
		if (values[getMaxRow(id,truthTable210)]> values[getMaxColumn(id,truthTable210)]) {
			// console.log("C");
			return ids[getMaxRow(id,truthTable210)];
		}else{
			// console.log("E");
			return ids[getMaxColumn(id,truthTable210)];
		}
	}
}

getBest = (current,truthTable23) =>{
	let truthTable21 = truthTable23;
	let score1 = 0;
	let score2 = 0;
	// let TT = truthTable3;

	// LEVEL 1;
	let max = getMax2(current,truthTable21); 
	truthTable21[getNumber(max)] = false;
	score1 += values[getNumber(max)];

	// LEVEL 2;
	let max2 = getMax2(max,truthTable21); 
	truthTable21[getNumber(max2)] = false;
	score2 += values[getNumber(max2)];

	// LEVEL 3;
	let max3 = getMax2(max2,truthTable21); 
	truthTable21[getNumber(max3)] = false;
	score1 += values[getNumber(max3)];

	// LEVEL 4;
	let max4 = getMax2(max3,truthTable21); 
	truthTable21[getNumber(max4)] = false;
	score2 += values[getNumber(max4)];

	// LEVEL 5;
	let max5 = getMax2(max4,truthTable21); 
	truthTable21[getNumber(max5)] = false;
	score1 += values[getNumber(max5)];

	// LEVEL 6;
	let max6 = getMax2(max5,truthTable21); 
	truthTable21[getNumber(max6)] = false;
	score2 += values[getNumber(max6)];

	// LEVEL 7;
	let max7 = getMax2(max6,truthTable21); 
	truthTable21[getNumber(max7)] = false;
	score1 += values[getNumber(max7)];

	// LEVEL 8;
	let max8 = getMax2(max7,truthTable21); 
	truthTable21[getNumber(max8)] = false;
	score2 += values[getNumber(max8)];
	let scores = [];
	scores[0]= score1;
	scores[1]= score2;
	return scores;
}


getChoice = (current,truthTable,truthTable2)=>{
	// truthTable2 = truthTable3;
	// truthTable = truthTable3;
	let t2 = truthTable2;

	let maxCol2 = getMaxColumn(current,truthTable);
	let maxRow2 = getMaxRow(current,truthTable);

	// console.log("COLUMN");
	let r2 = getBest(maxCol2,truthTable2);
	// truthTable2 = truthTable3;
	// console.log("ROW");
	let r3 = getBest(maxRow2,t2);
	// console.log(r3);
	let diff = r2[0]-r2[1];
	let diff2 = r3[0]-r3[1];
	let myChoice = diff>diff2?maxCol2:maxRow2;
	// let myChoice2 = diff>diff2?"COLUMN":"ROW";
	if (maxCol2 == undefined || maxRow2 == undefined) {
		console.log(truthTable);
		console.log(truthTable2);
		console.log(truthTable3);
	}
	// console.log(maxCol2,maxRow2,diff,diff2,myChoice,myChoice2);	
	return myChoice;
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
// let ix = getChoice(current,truthTable,truthTable2);
// truthTable2 = [];
// truthTable2 = truthTable;
// truthTable[ix] = false;
// truthTable2[ix] = false;
// truthTable3[ix] = false;

// console.log(getLeft2(truthTable),getLeft2(truthTable2),getLeft2(truthTable3));

// let ix2 = getChoice(current,truthTable,truthTable2);
// truthTable2 = [];
// truthTable = [];
// truthTable2 = truthTable3;
// truthTable = truthTable3;
// truthTable[ix2] = false;
// truthTable2[ix2] = false;
// truthTable3[ix2] = false;

// console.log(getLeft2(truthTable),getLeft2(truthTable2),getLeft2(truthTable3));

// let ix3 = getChoice(current,truthTable,truthTable2);
// truthTable2 = [];
// truthTable = [];
// truthTable2 = truthTable3;
// truthTable = truthTable3;
// truthTable[ix3] = false;
// truthTable2[ix3] = false;
// truthTable3[ix3] = false;

// console.log(getLeft2(truthTable),getLeft2(truthTable2),getLeft2(truthTable3));
