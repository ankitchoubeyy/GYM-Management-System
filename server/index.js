const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');  //import the cors middleware
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const router = require("./routes/user");
const userVerification = require("./middlewares/authMiddleware");



const app = express();

const URI = "mongodb://localhost:27017/gym";

const dbConnect = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("database connection established");
    } catch (error) {
        console.log("Not able to connect Database",error);    }
}

dbConnect();

app.use(express.json());   //parses incoming json requests and makes the parsed data avilable in req.body;
app.use(cookieParser()); //Parses cookies attached to the client request and makes them available in req.cookies.


// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, 
// }))  //CORS  middleware is being used to hande cross-origin requests, allowing the server to specify which domains are allowed to access resources. In this case , you're settig up CORS  to allow requests from http://localhost:5173, 
// //credentials - true option indicates that cookies or authorization headers can be include with the requests.


app.use("/", (req,res)=>{
    res.send("HEllo dude")
})

app.use("/auth", router);
app.use(userVerification);
app.get("/", (req,res)=>{
    res.json({message: "You are at home page"});
})
app.get("/dashboard", (req,res)=>{
    res.status(200).json({name: req.user.name, email:req.user.email});
})



app.listen(9000, (err)=>{
    if(err) console.log(err + "server not created");
    console.log("server is running !");
});

