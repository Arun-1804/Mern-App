const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
var bodyParser = require("body-parser")
const userSchema = require("./Models/userDetails")
const loginSchema = require("./Models/forLogin")
const cors = require("cors");
app.use(cors("*"))
const dotenv = require("dotenv");  
dotenv.config();
app.use(bodyParser.urlencoded( {
    extended: true
}));
app.use(bodyParser.json())
require("./Models/userDetails");
require("./Models/forLogin");
const url = process.env.REACT_APP_MONGO_URI;  
const user = mongoose.model("userInfo");
mongoose.connect(
    process.env.REACT_APP_MONGO_URI || url, {
   useNewUrlParser: true, useUnifiedTopology: true ,
}).then(()=> {console.log("database Connected");})
.catch((e)=> console.log(e));


app.listen(5000,()=> {
    console.log("Started");
})


//API//
app.get("/",async (req,res)=> {
    res.send("Welcome")
})
app.post("/signUp", async (req,res)=> {
    const requestDetail = req.body;
    try {
                    const oldUser = await user.findOne({ mailId: req.body.mailID})
                    if(oldUser) {
                                return res.json({message:"User Exixts", status:200})
                            }
                            else 
                            {
                                await user.create({
                                    userName:requestDetail?.userName,
                                    mailId:requestDetail?.mailID,
                                     password:requestDetail?.password
                                            })
                                            res.json({message:"success", status:"200"})
                            }
                        }
                        catch (error) {
                    res.send({status:error})
                        }
})
/* Login */
app.post("/login", async (req,res)=> {
    const requestDetail = req.body;
    try {
                    user.findOne({ mailId: requestDetail.mailID})
                    .then(user => {
                        if(user){
                            if(user.password === requestDetail.password) {
                                res.json({message:"Valid User",status:200})
                            }
                            else{
                                res.json({message:"Incorrect Email ID or Password",status:200})
                            }
                        }
                        else {
                            res.json({message:"No records found",status:204})
                        }
                    })
                }
                        catch (error) {
                    res.send({status:error})
                        }
})
