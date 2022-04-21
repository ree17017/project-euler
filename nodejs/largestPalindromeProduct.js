// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
// 100-999

function largestPalindrome() {
	let start = 100;
	let end = 999;
	let i = 0;
	let largest = [];
	for (let i = 100; i <= 999; i++) {
		for (let x = i; x <= 999; x++) {
			console.group({ i, x });
			console.log({ start, end });
			var num = String()
				.split('')
				.map((num) => {
					return Number(num);
				});

			if (num[0] === num[num.length - 1]) {
				if (num[1] === num[num.length - 2]) {
					if (num[2] === num[num.length - 3]) {
						console.log('thired', num[2], num[num.length - 3]);
						largest.push(num);
						break;
					}
				}
			}

			console.log(num);
			const reverseNum = num.reverse();
			console.log(reverseNum, num);

			const isEqual = JSON.stringify(num) === JSON.stringify(reverseNum);
			console.log(JSON.stringify(num), JSON.stringify(reverseNum));

			if (isEqual) {
				console.log('same?', num);
			}
			console.groupEnd({ i, x });

			if (start < 999) start++;
			if (end >= 100) end--;
			i++;
		}
		return largest;
	}
}

console.log(largestPalindrome());
