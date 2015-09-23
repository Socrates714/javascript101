function largestprime (prime){  
	var factor = prime - 1;  
	while (prime % factor != 0) {
		factor -= 1; 
	}
	if (factor > 1) {  
					   
		console.log("factor = " + factor); 
		console.log("prime = " + prime);   
		return largestprime(factor);
	}

	else {
	console.log("At the end, factor = " + factor);
	console.log("At the end, prime = " + prime);   
	return prime; 
	}
}

console.log(largestprime(100));
console.log(largestprime(1503));
console.log(largestprime(600851475143));
