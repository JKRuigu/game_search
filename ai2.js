function getBest(current,truthTable2) {
	let score1 = 0;
	let score2 = 0;

	// LEVEL 1;
	let max = getMax(current,truthTable2); 
	truthTable2[getNumber(max)] = false;
	score1 += values[getNumber(max)];

	// LEVEL 2;
	let max2 = getMax(max,truthTable2); 
	truthTable2[getNumber(max2)] = false;
	score2 += values[getNumber(max2)];

	// LEVEL 3;
	let max3 = getMax(max2,truthTable2); 
	truthTable2[getNumber(max3)] = false;
	score1 += values[getNumber(max3)];

	// LEVEL 4;
	let max4 = getMax(max3,truthTable2); 
	truthTable2[getNumber(max4)] = false;
	score2 += values[getNumber(max4)];

	// LEVEL 5;
	let max5 = getMax(max4,truthTable2); 
	truthTable2[getNumber(max5)] = false;
	score1 += values[getNumber(max5)];

	// LEVEL 6;
	let max6 = getMax(max5,truthTable2); 
	truthTable2[getNumber(max6)] = false;
	score2 += values[getNumber(max6)];

	// LEVEL 7;
	let max7 = getMax(max6,truthTable2); 
	truthTable2[getNumber(max7)] = false;
	score1 += values[getNumber(max7)];

	// LEVEL 8;
	let max8 = getMax(max7,truthTable2); 
	truthTable2[getNumber(max8)] = false;
	score2 += values[getNumber(max8)];
	let scores = [];
	scores[0]= score1;
	scores[1]= score2;
	return scores;
}

getChoice = (current,truthTable,truthTable2)=>{

	truthTable2 = truthTable3;
	truthTable = truthTable3;

	let maxCol2 = getMaxColumn(current,truthTable);
	let maxRow2 = getMaxRow(current,truthTable);

	// console.log("COLUMN");
	let r2 = getBest(maxCol2,truthTable2);
	// console.log(r2);
	truthTable2 = truthTable3;
	// console.log("ROW");
	let r3 = getBest(maxRow2,truthTable2);
	// console.log(r3);
	let diff = r2[0]-r2[1];
	let diff2 = r3[0]-r3[1];
	let myChoice = diff>diff2?maxCol2:maxRow2;
	// let myChoice2 = diff>diff2?"COLUMN":"ROW";
	// console.log(diff,diff2,myChoice,myChoice2);	
	return myChoice;
}

