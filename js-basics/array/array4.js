var data = [11,22,34,3,23,67,89,122,34,567,890,9,87]
console.log(data)


function sortbyValue(a,b){
    return a-b
}

data.sort(sortbyValue)
console.log(data)


var users = ["amit","raj","ram","ravi","raju","parth","Zara","malayalam","kunal","nilesh","kiran"]



const sortByLen = (a,b)=>{


    return a.length-b.length

}

console.log(users)
//users.sort()
//users.sort(sortByLen)
users.sort((a,b)=>a.length-b.length)
console.log(users)