const express = require("express");
const router = express.Router();
const url = require("url");

router.get("/list",(req,res)=>{
    const page = url.parse(req.url,true).query.page;
    res.send({
        status:200,
        result:[
            {
                id:1001,
                name:"fork"
            },{
                id:1002,
                name:"spone"
            }
        ],
        page
    })
})

router.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.send({
        status:200,
        username,
        password
    })
})
module.exports = router;