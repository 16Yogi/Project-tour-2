const mongooes= require("mongoose")
mongooes.connect("mongodb+srv://jereg42880:3lrrIkYNjMFbdEcl@cluster0.3snlp4j.mongodb.net/mydb1")

.then(()=>{
    console.log("Connected");
})
.catch(()=>{
    console.log("Failed");
})

const newSchema=new mongooes.Schema({
    msg:{
        type:String,
        required:true
    }
})

const collection = mongooes.model("products",newSchema)
module.exports=collection