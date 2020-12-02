const express = require('express')
// const http = require('express')
let app= express()
app.get("/hello",(req,res,next) =>{
    res.send("Helloworld")
})
app.get("/i/:short",(req,res,next) =>{
    let data = {
        "g":"https://www.google.com",
        "s":"http://www.sanook.com",
        "h":"http://www.hunsa.com/",
        "tee":"http://www.teenee.com/",
        "tr":"http://www.thairath.co.th",
    }

    if(data[req.params.short].length  !== 0){
        res.redirect(data[req.params.short])
    }
    res.send(data[req.params.short])
})
app.listen(8088,()=>{
    console.log('this is server side');
})