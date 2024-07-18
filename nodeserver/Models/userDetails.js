const mongoose = require("mongoose")

const userSchema = new mongoose.Schema( {
    userName:"string",
    mailId:{type: String, unique: 'User Already Exists'},
    password:"string"
},
{
    collection:"userInfo"
}
);
module.exports = mongoose.model("userInfo", userSchema)
