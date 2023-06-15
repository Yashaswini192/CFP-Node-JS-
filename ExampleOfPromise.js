//PRomise - used for handling asynchronous operations
//the call back fucntion inside promise '.then' is executed , then the promise resolved
//if the function is rejected then it goes to '.catch' , then it prints message in the error

function fetchData() {
    return new Promise(function(resolve, reject){// Simulating an asynchronous operation
      setTimeout(function() {
        const d = 6;
        if(d == 7){
            resolve(d);
        }else{
            // Reject the promise with an error
        reject(new Error("False"));
        }   
      }, 2000); 
    });
  }

  fetchData()
  .then(function(data) {
    console.log("Value:", data);
  })
  .catch(function(error) {
    console.log("Error:", error.message);
  });