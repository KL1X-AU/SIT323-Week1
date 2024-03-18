const express = require("express")
const res = require("express/lib/response")
const app = express()

//addTwoNumber takes two numbers and returns the sum.
const addTwoNumber = (n1,n2) => {
    return n1 + n2
}

//Defines our query and response for /addTwoNumber page
//Format as http://localhost:3040/addTwoNumber?n1=SomeNumber&n2=SomeNumber
app.get("/addTwoNumber", (req,res) => {
    const n1 = parseInt(req.query.n1)
    const n2 = parseInt(req.query.n2)
    const result = addTwoNumber(n1,n2)
    res.json({statuscode:200, data: result})
})

//Defines the listening port for the application and logs the output of addTwoNumber with fixed variables.
console.log(addTwoNumber(19,12))
const port = 3040
app.listen (port, () => {
    console.log(`Application is listening on port ${port}`)
})