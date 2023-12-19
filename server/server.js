const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));


//connecttion to database
mongoose.connect("mongodb+srv://sameer:sameer@cluster0.ad7klvh.mongodb.net/?retryWrites=true&w=majority").then(()=>
console.log("Connected to mongodb")).catch((err) =>console.log(err))

//signup schema
const SignupSchema=mongoose.Schema({
    userName:String,
    password:String,
    confirm_password:String,
})

const signup_model=mongoose.model("signup_detail",SignupSchema);



app.get("/",function(req,res){
    res.send("Server is running bro")
})

app.listen(5000,function(req,res){
    console.log("server is running on port 5000")
})