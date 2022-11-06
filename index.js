const express = require("express")
const app = express();
app.listen(3000)
app.use(express.urlencoded({extended:true}))


app.get("/form" , function(req , res) {
    res.sendFile(__dirname + "/myform.html")
})



app.post("/form" , function(req , res) {
    const myx = req.body.x; 
    const myy = req.body.y; 
    // let z = Number(myx) + Number(myy);
    let z = +myx + +myy;
    console.log(req.body);
    res.send("Sum : " + z )      
})











// app.get("/data" , function(req , res) {
//     const myy = req.query.y;
//     const myx = req.query.x;
//         let z = +myx + +myy;
//         res.send("Sum : " + z);
//         // console.log(req.body);
//     })





