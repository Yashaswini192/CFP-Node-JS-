function fetchData() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const data = "Hello, world!";
        resolve(data);
      }, 3000);
    });
  }
  
  async function getData() {
    try {
      const result = await fetchData();
      console.log("Data:", result);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
  
  getData();
