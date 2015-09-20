function largestprime (prime){  //calculates the largest prime factor
	var factor = prime - 1;  //start at prime -1 and look for factor
	while (prime % factor != 0) {
		factor -= 1; 
	}
	if (factor > 1) {  //If the factor is more than one, the last
					   //The last factor has not been reached
		console.log("factor = " + factor); //shows current value of
		console.log("prime = " + prime);   //factor and prime
		return largestprime(factor); //Run function recursively to find
									 //nexxt factor.
	}

	else {  //if factor = 1 you have found the last prime.
	console.log("At the end, factor = " + factor); //prints last value of
	console.log("At the end, prime = " + prime);   //facotor and prime for logs
	return prime; //return the final value of prime.
	}
}

console.log(largestprime(100));
console.log(largestprime(1503));
console.log(largestprime(600851475143));
