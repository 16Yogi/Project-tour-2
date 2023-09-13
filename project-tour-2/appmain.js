const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");


// const PaytmChecksum = require("paytmchecksum");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
// const Razorpay = require('razorpay');
const routes = require('./RouterInsert')

const {main} = require('./Connecting')







app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS


main()




app.use("/", routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});













