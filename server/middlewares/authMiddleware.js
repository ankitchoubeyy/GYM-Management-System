const jwt = require("jsonwebtoken");
const User = requier("./models/user");
const secretKey = process.env.JWT_SECRET || "Arvind123";



function userVerification(req,res, next){
    
    console.log("middleware function checking");


    const tokenValue = req.cookies.token;
    console.log("tokenValue: ", tokenValue);


    if(!tokenValue){
        return res.json({message: "token is not provied during user verification"});
    }

    try {
        const decoded = jwt.verify(tokenValue, secretKey);
        req.user = decoded;  // attach the user info to the request object
        //log the decoded user information
        console.log("Decoded Token Payload:", decoded);

        next();  //proceding to the next middleware or route handler.
    } catch (error) {
        return res.status(403).json({message: "invalid token", error});
    }
}

module.exports = userVerification;