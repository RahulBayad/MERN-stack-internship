var students = [
    {
        id:1,
        name:"raj",
        email:"raj@gmail.com",
        gender:"male"
    },
    {
        id:2,
        name:"seeta",
        email:"seeta@gmail.com",
        gender:"female"
    },
    {
        id:3,
        name:"geeta",
        email:"geeta@gmail.com",
        gender:"female"
    }
]

// students.forEach((student)=>{
//     console.log(student.name)
// })


// var students = students.map((student)=>{

//     // return({
//     //     id:student.id+100,
//     //     name:student.name.toUpperCase(),
//     //     email:student.email
//     // })
//     return student.name.toUpperCase()
// })
// console.log(students)


var filStudents = students.filter((student)=>{

    return student.gender =="male"
})
console.log(filStudents)