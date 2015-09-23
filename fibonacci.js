var count = 1; 
var sum = 0;  
while (count < 4000000) {

	var prev_count;  
	
	if (count == 1){  
		prev_count = count;
		count += count;
	}
	else {  
		two_counts_back = prev_count;  
		prev_count = count;            
		count = count + two_counts_back;
	}
	if (count % 2 == 0) {
			sum += count;
	}

}
console.log("The sum of all even numbers is " + sum);
