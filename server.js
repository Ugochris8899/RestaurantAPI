const express = require("express");
const mongoose = require("mongoose");
const PORT = 2023;
const app = express();
app.use(express.json());

const router = require("./router/chickenRepublicRouter")
app.use(router)




mongoose.connect("mongodb+srv://amagbaugochukwu:TXG4NEnRwvIOABN4@cluster0.wxuoeen.mongodb.net/")
.then( ()=>{
    console.log("database Connected");
});



app.listen(PORT, (req, res) =>{
    console.log(`Listening to server on port: ${PORT}`);
})