var count = 1; //Variable to keep track of the current number.
var sum = 0;  //Variable to keep track of the sum of even numbers.
while (count < 4000000) {

	var prev_count;  //Variable to keep track of the previous number.
	var two_counts_back;  //Variable to keep track of 2 numbers back.
	
	if (count == 1){  //deals with the first number in the fibonacci sequence.
		prev_count = count;
		count += count;
	}
	else {  //deals with the rest of the sequence up to 4000000
		two_counts_back = prev_count;  //keep track of past numbers to add
		prev_count = count;            //to make fibonacci sequence
		count = count + two_counts_back;
	}
	if (count % 2 == 0) {
			sum += count;
	}

}//print sum of even numbers
console.log("The sum of all even numbers is " + sum);
