function fetchUSerData(){


    return new Promise((success,failure)=>{

        setTimeout(()=>{
            //success({id:1,name:"user1"})
            failure({error:"server error"})
        },2000)
    })

    // return 100


}

// var user;
// fetchUSerData().then((data)=>{
//     console.log(data) //user obj
//     user = data
//     //then().then().then()
//     //callback hell
// }).catch((error)=>{
//     console.log(error)
// }) 
// //{3}

// console.log("user...",user) //undefined

// async function printStudentData (){


//         var promise = await fetchUSerData()
//         console.log(promise) //pending


// }


const printStudentData = async () =>{

var promise = await fetchUSerData()
console.log(promise)

}
printStudentData()