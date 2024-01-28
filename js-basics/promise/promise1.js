const getData = () => {
    var promise = new Promise((resolve, reject) => {
      // resolve("data...")
      setTimeout(() => {
        //resolve("data...")
        reject("server error...");
      }, 2000);
      //reject("error")
    });
  
    console.log(promise); //pending
  
    promise.then((data) => {
      console.log("then block");
      console.log(data);
    });
    promise.catch((error) => {
      console.log("catch block");
      console.log(error);
    });
  };
  getData();