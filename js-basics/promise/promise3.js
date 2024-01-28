const fetchStudents = () => {

    console.log("start")
    
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //    resolve(["user1","user2","user3"])
          reject({ error: "server error" });
        }, 3000);
      });
    
    console.log("end")
    };
    
    // var promise = fetchStudents()
    // console.log(promise)
    // promise.then((students)=>{
    //     console.log(students)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    
    console.log("start1");
    fetchStudents()
      .then((students) => {
        console.log(students);
      })
      .catch((error) => {
        console.log(error);
      });
    
      console.log("end1");