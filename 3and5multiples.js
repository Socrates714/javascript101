var sum = 0; //variable to keep track of sum of numbers divisible by
			 //3 and 5
for(i=0; i<1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {  //if I is divisible by 3 or 5
    	sum += i;
    }  //add I to sum
}
console.log(sum);  //writes the sum