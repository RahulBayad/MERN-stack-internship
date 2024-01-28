// const test = () =>{

//     return 100
// }

// var x = test()
// console.log(x) // 100
//console.log(test())

const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("user1");
      }, 3000);
    });
  };
  // var x = getData() //x is a promise object
  // console.log(x)
  // x.then((data)=>{
  //     console.log(data)
  // })
  // x.catch((error)=>{
  //     console.log(error)
  // })
  
  getData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });