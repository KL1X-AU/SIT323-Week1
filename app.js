var express = require("express")
var app = express()

//respond with 'Hello World' when requesting the homepage.
app.get("/", (req,res) => {
    res.send("Hello World")
})

//Listening on port 3000
app.listen(3000)