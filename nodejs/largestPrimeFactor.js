// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
let primeNumbers = [];
function maxPrimeFactor(n) {
	let maxPrime = -1;
	while (n % 2 == 0) {
		n = n / 2;
		maxPrime = 2;
	}

	while (n % 3 == 0) {
		n = n / 3;
		maxPrime = 3;
	}

	for (let i = 5; i <= Math.sqrt(n); i += 6) {
		while (n % i == 0) {
			maxPrime = i;
			primeNumbers.push(maxPrime);
			n = n / i;
		}
		while (n % (i + 2) == 0) {
			maxPrime = i + 2;
			primeNumbers.push(maxPrime);
			n = n / (i + 2);
		}
	}

	primeNumbers.push(n > 4 ? n : maxPrime);
	return n > 4 ? n : maxPrime;
}

maxPrimeFactor(600851475143);
console.log(primeNumbers);
