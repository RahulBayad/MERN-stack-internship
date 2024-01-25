var users = [
    {
        id:1,
        name:"raj",
    },
    {
        id:2,
        name:"seeta",
    },

    {
        id:3,
        name:"geeta",
    }
]

//2
function removeUser (id){
    

    //

    users = users.filter((user)=>{
        //1
        //2
        //3 

        return user.id != id // 1!=2 true //2!=2 false //3!=2 true


    })

    console.log(users)


}
removeUser(2)