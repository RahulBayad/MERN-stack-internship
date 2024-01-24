// const science = ()=>{
//     return 'Science';
// }
// const comm = ()=>{
//     return 'Commerce';
// }
// const arts = ()=>{
//     return 'Arts';
// }


// const admission = (cb)=>{

//     var stream = cb() //science()
//     console.log("Admission for "+stream+" is open")

// }

// admission(comm)


// const science = (name)=>{
//     return name+' in Science';
// }
// const comm = (name)=>{
//     return name +' in Commerce';
// }
// const arts = (name)=>{
//     return name + ' in Arts';
// }


// const admission = (name,cb)=>{

//     var stream = cb(name) //science()
//     console.log("Admission for "+stream+" is open")

// }

// admission("amit",comm)

// const science = (name)=>{
//     return name+' in Science';
// }
// const comm = (name)=>{
//     return name +' in Commerce';
// }
// const arts = (name)=>{
//     return name + ' in Arts';
// }


// const admission = (name,cb)=>{

//     var stream = cb(name) //science()
//     //console.log("Admission for "+stream+" is open")
//     return stream

// }

// var adm = admission("amit",comm)
// console.log("Admission for "+adm+" is open")

const science = (name)=>{
    return name+' in Science';
}
const comm = (name)=>{
    return name +' in Commerce';
}
const arts = (name)=>{
    return name + ' in Arts';
}


const admission = (name,cb)=>{

    // var stream = cb(name) //science()
    // //console.log("Admission for "+stream+" is open")
    // return stream

    return cb(name)

}

var adm = admission("amit",comm)
console.log("Admission for "+adm+" is open")