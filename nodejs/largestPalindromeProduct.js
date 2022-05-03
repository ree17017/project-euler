function isPalindrome(num) {
	return parseInt(String(num).split('').reverse().join('')) === num;
}

function findLargestPalindromeProduct(numberOfDigits) {
	var start = Math.pow(10, numberOfDigits - 1);
	var end = Math.pow(10, numberOfDigits);
	var largestPalindrome = 0;
	var product;
	for (a = start; a < end; a++) {
		for (b = start; b < end; b++) {
			product = a * b;
			if (largestPalindrome < product) {
				if (isPalindrome(product)) {
					largestPalindrome = product;
				}
			}
		}
	}

	return largestPalindrome;
}
console.time('Function #1');
console.log(findLargestPalindromeProduct(5));
console.timeEnd('Function #1');
