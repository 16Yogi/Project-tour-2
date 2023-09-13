const express = require("express");
const Router = express.Router();
const cors = require('cors');
const app = express();

const { mydb2 } = require("./model");

//api
Router.post("/users", async (req, res) => {
    const data = req.body;
    

    
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const fromadd = data.fromadd;
    const toadd = data.toadd;
    const nummember = data.nummember;
    const message = data.message;

    const storedata = new mydb2({
      name : name,
      email : email,
      phone : phone,
      fromadd : fromadd,
      toadd : toadd,
      nummember : nummember,
      message : message,
    });
  
    try {
      await storedata.save();
      res.status(200).json({ message: "Data received and saved successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  