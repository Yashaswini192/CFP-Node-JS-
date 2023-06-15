//async and await are used to handle asynchronous operations 
//to make it more synchronous and readable way.
//async keyword is used to declare asynchronous function

function fetchData(userId) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const user = { id: userId, name: "JK" };
        resolve(user);
      }, 2000);
    });
  }
  
  async function getData(userId) {
    try {
      const user = await fetchData(userId);
      console.log("User:", user);
      return "Data successfully fetched";
    } catch (error) {
      reject(new Error("Error:", error.message)); 
    }
  }
  
  getData(123)
    .then(function(result) {
      console.log("Result:", result);
    })
    .catch(function(error) {
      console.log("Caught error:", error.message);
    });
  
    