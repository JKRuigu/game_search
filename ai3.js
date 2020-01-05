function aiRandom(id) {
	if (getMaxColumn(id,truthTable) == undefined && getMaxRow(id,truthTable) == undefined) {
		// console.log("FULL");
		for (var i = 0; i < truthTable.length; i++) {
			if (truthTable[i]) {
				return i;
			}
		}
	}else{
		let colData = getColumn(Number(String(id)[1])-1);
		let rowData = getRow(Number(id));

		for (var i = 0; i < rowData.length; i++) {
			colData.push(rowData[i]);
		}


		function remove(arr) {
			let newArr = [];
			for (var i = 0; i < arr.length; i++) {
				index = arr[i];
				if (truthTable[index]) {
					newArr.push(index);
				}
			}
			return newArr;
		}
		let data = remove(colData);
		
		return data[Math.floor(Math.random()*data.length)];
	}
}