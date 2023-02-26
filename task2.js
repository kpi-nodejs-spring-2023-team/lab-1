function highAndLow(numbers) {
	let arr = numbers.split(" ");
	let max = parseInt(arr[0]);
	let min = parseInt(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		let num = parseInt(arr[i]);

		if (num > max) {
			max = num;
		}

		if (num < min) {
			min = num;
		}
	}

	let highest = max.toString();
	let lowest = min.toString();

	return highest + " " + lowest;
}
