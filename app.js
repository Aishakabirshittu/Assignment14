//Solution 1
// Step 1: Create two functions that return Promises with different delays.
function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First promise resolved!");
      }, 1000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second promise resolved!");
      }, 2000);
    });
  }
  
  // Step 2: Use Promise.all() with the two functions.
  Promise.all([firstPromise(), secondPromise()])
    .then((results) => {
      // Step 3: Log the results once both Promises have resolved.
      console.log(results);
    });
  


//Solution 2
// Step 1: Create a function that returns a Promise, with the chance of rejecting.
function riskyOperation() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      setTimeout(() => {
        success ? resolve("Operation succeeded!") : reject("Operation failed!");
      }, 1000);
    });
  }
  
  // Step 2: Chain then() to handle the resolved state.
  riskyOperation()
    .then((result) => {
      console.log(result);
    })
    // Step 3: Attach a catch() to handle any errors and log an error message.
    .catch((error) => {
      console.error("Error:", error);
    });
  


//Solution 3
// Step 1: Create a function that returns a Promise with potential rejection.
function riskyFunction() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      setTimeout(() => {
        success ? resolve("Everything went well!") : reject("Something went wrong!");
      }, 1500);
    });
  }
  
  // Step 2: Call the function and chain a catch() to handle any errors.
  riskyFunction()
    .then((message) => {
      console.log(message);
    })
    // Step 3: Log the error message within catch().
    .catch((error) => {
      console.error("Caught an error:", error);
    });
  


//Solution 4
// Step 1: Define a function named multiply.
function multiply(num1, num2, callback) {
    // Step 3: Inside multiply, call the callback with the product of the two numbers.
    const result = num1 * num2;
    callback(result);
  }
  
  // Step 4: Define a callback function that logs the result to the console.
  function logResult(result) {
    console.log("Result is:", result);
  }
  
  // Step 5: Call multiply with two numbers and the callback function.
  multiply(3, 4, logResult);
  


//Solution 5
// Step 1: Define a function named printHello.
function printHello() {
    // Step 2: Inside the function, use setTimeout.
    setTimeout(() => {
      // Step 4: Within setTimeout, log "Hello" to the console.
      console.log("Hello");
    }, 2000); // Step 3: Set the delay to 2 seconds.
  }
  
  printHello();
  
//Solution 6
// Step 1: Define an async function.
async function pauseWithAwait() {
    // Step 2: Inside the function, create a Promise that resolves after a delay.
    const delayedPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise resolved after delay!");
      }, 3000);
    });
  
    // Step 3: Use await to wait for the Promise to resolve.
    const result = await delayedPromise;
    // Step 4: Log a message after the await statement.
    console.log(result);
  }
  
  pauseWithAwait();
  


//Solution 7
// Step 1: Define a function that takes a callback and performs an asynchronous action.
function doStep1(callback) {
    setTimeout(() => {
      console.log("Step 1 completed");
      callback();
    }, 1000);
  }
  
  // Step 2 & 3: Nest asynchronous actions.
  function doStep2(callback) {
    setTimeout(() => {
      console.log("Step 2 completed");
      callback();
    }, 1000);
  }
  
  function doStep3(callback) {
    setTimeout(() => {
      console.log("Step 3 completed");
      callback();
    }, 1000);
  }
  
  // Callback hell example:
  doStep1(() => {
    doStep2(() => {
      doStep3(() => {
        console.log("All steps completed!");
      });
    });
  });


  
//Solution 8
// Step 1: Define a function that uses setInterval to print the time every second.
function startTimer() {
    let elapsedTime = 0;
  
    // Step 2: Track elapsed time in a variable.
    const intervalId = setInterval(() => {
      elapsedTime++;
      console.log(`Elapsed Time: ${elapsedTime} seconds`);
  
      // Step 3: Use clearInterval to stop the timer after 5 seconds.
      if (elapsedTime >= 5) {
        clearInterval(intervalId);
        console.log("Timer stopped!");
      }
    }, 1000);
  }
  
  startTimer();
  
  
//Solution 9
// Step 1: Define an async function.
async function throwErrorExample() {
    // Step 2: Use throw to simulate an error within the function.
    throw new Error("Simulated Error!");
  }
  
  // Step 3: Wrap the function call in a try...catch block.
  async function handleError() {
    try {
      await throwErrorExample();
    } catch (error) {
      // Step 4: Log the error in the catch block.
      console.error("Caught an error:", error.message);
    }
  }
  
  handleError();
  
//Solution 10
// Step 1: Create two functions that return Promises, with the second depending on the first.
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data} and processed!`);
      }, 2000);
    });
  }
  
  // Step 2: Chain the Promises using .then() to handle the first operation, then the second.
  fetchData()
    .then((data) => {
      console.log(data);
      return processData(data);
    })
    .then((processedData) => {
      // Step 3: Log the result of each operation.
      console.log(processedData);
    });
  