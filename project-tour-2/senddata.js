const express = require("express")
const cors = require("cors")

//get collection
const collection=require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    //insert
    // const {msg} = req.body
    const {name} = req.body
    const {email} = req.body
    const {phone} = req.phone
    const {fromadd} = data.fromadd
    const {toadd} = data.toadd
    const {nummember} = data.nummember
    const {message} = data.message
    
    const data = {
        // msg:msg
        name:name,
        email:email,
        phone:phone,
        fromadd:fromadd,
        toadd:toadd,
        nummember:nummember,
        message:message
    }
    await collection.insertMany([data])
})
app.listen(8000,()=>{
    console.log("port connected")
})