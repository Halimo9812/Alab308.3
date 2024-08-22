// Accomplish the following:
// Loop through all numbers from 1 to 100.
// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }


// If a number is divisible by 3, log “Fizz.”
// for(i=1;i<=20;i++){
//     if(i%3==0){
//         console.log(i + " Fizz");
//             }
// }

// If a number is divisible by 5, log “Buzz.”
// for(i=1;i<=20;i++){
//     if(i%5==0){
//         console.log(i + " Buzz");
//             }
// }

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// for(i=1;i<=20;i++){

// if( (i%3) === 0 && (i%5) === 0 ) {
//         console.log( i + "FizzBuzz" );

// }
// }
// If a number is not divisible by either 3 or 5, log the number.

    // for(i=1;i<=20;i++){

    //      if( (i%3) !==0  &&  (i%5) !== 0 ) {
    //              console.log( i);
    // }
    // else{    
    //     console.log(i + "FizzBuzz")
    // }
    // }

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// let n = 5

// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
/// Not sure but I got lost with this one. I solved it and erased the answer and was stuck since.
let n = 11
isPrime = true
notPrime =false
 {
    for (i = 2; i <= n ; i++) {
        if (n % i == 0) {
        notPrime = false
            break
        }
    }
console.log(n+=)
}

//part 3

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.

// function parseCSV (csvString){
//     let rows = csvString.split ('\n');

//     rows.forEach (row =>{;
    
//     let cells = row.split (',')
//     console.log(cells.join (','))
// })
// }

// const csv1 = 'ID,Name,Occupation,Age,\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// parseCSV (csv1)