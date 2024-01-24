const pdfhandler = (fname)=>{
    console.log("uploaidng pdf file "+fname)
}
const wordhandler = (fname)=>{
    console.log("uploaidng word file "+fname)
}

const jpghandler = (fname)=>{
    console.log("uploaidng jpg file "+fname)
}



const uploadFile = (fname,cb)=>{

    cb(fname) //pdfhandler("abc.pdf")

}
//uploadfile("abc.pdf",pdfhandler)

var fName = "abc.pdf"
if(fName.endsWith(".pdf")){
    uploadFile(fName,pdfhandler)
}
else if(fName.endsWith(".jpg")){
    uploadFile(fName,jpghandler)
}
else{
    uploadFile(fName,wordhandler)
}