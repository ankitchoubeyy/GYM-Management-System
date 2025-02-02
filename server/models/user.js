const mongoose =  require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
    phone: String,
    role: {type: String, default:'user'},
    membership: {type:mongoose.Schema.Types.ObjectId ,ref:'Membership'},
    emailVerified: {type: Boolean, default:false},
    createdAt: {type: Date , default:Date.now},
})


//passing the schema into model
const User = mongoose.model("user", userSchema);

module.exports = User;