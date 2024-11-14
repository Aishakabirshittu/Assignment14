QUESTION 1
Use Promise.all() to execute two Promises concurrently and log both results
Step 1: Create two functions that return Promises with different delays.
• Step 2: Use Promise.all() with the two functions.
Step 3: Log the results once both Promises have resolved.

QUESTION 2
Implement error handling with -catch() in a Promise chain.
	•	  Step 1: Create a function that returns a Promise, with the chance of rejecting.
	•	  Step 2: Chain then() to handle the resolved state.
	•	  Step 3: Attach a -catch() to handle any errors and log an error message.

QUESTION 3
Show how to handle an error in a Promise-based function with -catch() .
	•	  Step 1: Create a function that returns a Promise with potential rejection.
	•	  Step 2: Call the function and chain a catch() to handle any errors.
	•	  Step 3: Log the error message within - catch() .

QUESTION 4
Implement a callback function to multiply two numbers and print the result.
	•	  Step 1: Define a function named multiply.
	•	  Step 2: Make multiply accept three parameters: two numbers and a callback.
	•	  Step 3: Inside multiply, call the callback with the product of the two numbers.
	•	  Step 4: Define a callback function that logs the result to the console.
	•	  Step 5: Call multiply with two numbers and the callback function.

QUESTION 5
1. Write a function using setTimeout that prints "Hello" after 2 seconds.
	•	  Step 1: Define a function named printHello.
	•	  Step 2: Inside the function, use setTimeout .Step 3: Set the delay to 2000 milliseconds (2 seconds).Step 4: Within setTimeout, log "Hello" to the console.

QUESTION 6
Demonstrate the use of await to pause code execution until a Promise is fulfilled.
Step 1: Define an async function.
Step 2: Inside the function, create a Promise that resolves after a delay.
Step 3: Use await to wait for the Promise to resolve.
Step 4: Log a message after the await statement.

QUESTION 7
Demonstrate an example of callback hell by nesting multiple callbacks.
	•	  Step 1: Define a function that takes a callback and performs an asynchronous action (e.g., setTimeout ).
	•	  Step 2: Within this function, create another call to an asynchronous function with another callback.
	•	  Step 3: Repeat the nesting a few times (at least three levels deep).Step 4: Print a message at each level to see the nested structure.

QUESTION 8
Implement a basic timer with setInterval that stops after 5 seconds.
Step 1: Define a function that uses setInterval to print the time every second.
	•	  Step 2: Track elapsed time in a variable.
	•	  Step 3: Use clearInterval to stop the timer after 5 seconds.

QUESTION 9
. Write an async function that throws an error and handle it with try...catch.
	•	  Step 1: Define an async function.
	•	  Step 2: Use throw to simulate an error within the function.
	•	  Step 3: Wrap the function call in a try. ..catch block.Step 4: Log the error in the catch block.

QUESTION 10
Chain two Promises to perform two dependent asynchronous operations.
	•	  Step 1: Create two functions that return Promises, with the second depending on the first.
	•	 Step 2: Chain the Promises using .then() to handle the first operation, then the second.
	•	  Step 3: Log the result of each operation. 
