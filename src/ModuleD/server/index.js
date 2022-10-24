const express = require('express');
const app = express();
const router = require('../router');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ //handle post format
    extended:true
}))
app.use("/",router);  
app.listen(3000, ()=>{
    console.log("server running ar port 3000")
})