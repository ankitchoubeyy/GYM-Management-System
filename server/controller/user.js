const User = require("./models/user.js");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "Arvind123";
const bcrypt = require("bcrypt");
const { findOne } = require("../models/user");


const signUp = async(req,res)=>{
     
    const {name, email,password} = req.body;  //extracting the data from request body

    //hashing th password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({name, email, password:hashedPassword}); // creating new user document
        console.log("User Document : ", user); // log user object
        await user.save();   //savind user inside database;

        res.status(201).json({message: "user registered successfuly", success:true});
    } catch (error) {
        console.log("signup error");
        res.status(500).json({message: 'error in register user', error});
    }
}


const login = async(req,res)=>{
    try {
        const {email, password} = req.body;

        const user = await findOne({email});

        if(!user){
            return res.status(401).json({message:"invalid credential", error});
        }

        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if(!passwordMatch){
            return res.status(401).json({error: 'authentication failed try again'});
        }

        const token  = jwt.sign({id: user._id}, secretKey);

        console.log("token after login", token);

        //return res.cookie("tokValue", token);

        res.cookie('token', token,{
            httpOnly:false,
            secure: false,
        });
        res.status(200).json({message: "user logged in successfully", success:true, token});
    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({message: 'Error in login', error});
    }
}

module.exports = {signUp, login};