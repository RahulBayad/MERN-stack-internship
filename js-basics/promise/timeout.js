console.log("start")
setTimeout(()=>{
    //console.log('timeout')
    getData()
},3000)

function getData(){
    console.log('getData')
}
console.log("end")