// database ke liye
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    Name: String,
    Email: String,
    PhoneNo: String,
    Fromadd: String,
    Toadd: String,
    NumMember:String,
    Msg:String,
  });

  
const mydb2 = mongoose.model("Travellingrequest", userSchema);  
module.exports = {mydb2}