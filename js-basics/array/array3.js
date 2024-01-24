var marks = [78,87,65,90,76,45,98]
//or
//loop..
// for(let i=0;i<marks.length;i++){
//     marks
// //}
//predicate statement

var flag = marks.some((m)=>{
    
    return m>100
})

var flag = marks.every((m)=>{
    
    return m>50
})
console.log("every..",flag)


var users = ["raj","ram","ravi","raju","parth"]

var flag = users.some((m)=>{

    return m.startsWith("p")
})

var flag = users.every((m)=>{

    return m.length >3
})
console.log("every..",flag)
