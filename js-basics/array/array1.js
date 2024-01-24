var users = ["raj","ram","ravi","raju","parth"]
console.log(users)

//console.log(users.length)

// for(let i=0;i<users.length;i++){
//     console.log(users[i])

// }

users.push("amit")
console.log(users)
var removedELm = users.pop()
console.log("removing...",removedELm)
console.log(users)


users.unshift("kunal")
console.log(users)
users.shift()
console.log(users)