var users = ["raj","ram","ravi","raju","parth"]
console.log(users)
//users.splice(1,1) //1st index and 1 element
//users.splice(2,0,"shyam","radha")//2nd index and 0 element remove and add shyam
var removedelm = users.splice(3,2,"shyam","radha")//3rd index and 1 element remove and add shyam),
console.log("removed element",removedelm)
console.log(users)