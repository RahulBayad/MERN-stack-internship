// const findMax = (no1,no2)=>{

//     if(no1>no2){
//         return no1;
//     }

//     return no2;

// }


const findMax = (no1,no2)=>no1>no2 ? no1 : no2
var max = findMax(100,20)
console.log("Max is ",max)


const isValid = (name) => name.startsWith("s") ? true : false
const isValid2 = (name)=>name.startsWith("s") && name.length>4? true : false
console.log("isValid ",isValid("sachin"))
console.log("isValid ",isValid2("sach"))