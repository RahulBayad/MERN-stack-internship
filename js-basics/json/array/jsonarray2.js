var employees = [
    {
        id:101,
        name:"amit",
        gender:"male",
        salary:10000,
        isMarried:false,
        child:0,
        city:"ahmedabad"
    },
    {
        id:102,
        name:"neha",
        gender:"female",
        salary:30000,
        isMarried:true,
        child:1,
        city:"ahmedabad"
    },
    {
        id:103,
        name:"parth",
        gender:"male",
        salary:50000,
        isMarried:true,
        child:2,
        city:"mumbai"
    },
    {
        id:104,
        name:"priya",
        gender:"female",
        salary:100000,
        isMarried:true,
        child:0,
        city:"mumbai"
    },
]

///find all female employees
//find all male employees from ahmedabad
//find all employee who are married
//find all employee who are married and have 2 child
/// find all male employee who is married 
//find all female employees from mumbai

let task1 = employees.filter((e)=>{
    return e.gender=="male";
})
console.log(task1);

let task2 = employees.filter((e)=>{
    return e.gender=="male" && e.city=="ahmedabad"
})
console.log(task1);

let task3 = employees.filter((e)=>{
    return e.isMarried
})
console.log(task3);

let task4 = employees.filter((e)=>{
    return e.isMarried && e.child == 2;
})
console.log(task4);

let task5 = employees.filter((e)=>{
    return e.isMarried && e.gender=="male";
})
console.log(task5);

let task6 = employees.filter((e)=>{
    return e.gender=="female " && e.city=="mumbai";
})
console.log(task6);