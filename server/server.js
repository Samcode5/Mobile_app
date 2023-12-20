const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


//connecttion to database
mongoose.connect("mongodb+srv://sameer:sameer@cluster0.ad7klvh.mongodb.net/?retryWrites=true&w=majority").then(()=>
console.log("Connected to mongodb")).catch((err) =>console.log(err))

//signup schema
const SignupSchema=mongoose.Schema({
    username:String,
    password:String,
    confirm_password:String,
})

const user=mongoose.model("user",SignupSchema);



app.get("/",function(req,res){
    user.find().then((data) =>{
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
})

app.post("/signup",function(req,res){
    
   const new_user=new user({
      username:req.body.username,
      password:req.body.password,
      confirm_password:req.body.confirm_password,
   })  

   new_user.save();
   console.log("added successfully");
})

app.post("/login",function(req,res){
    user.find({username:req.body.username}).then((data) =>{
        res.send(data);
      
      
    }).catch((err) =>{
        console.log(err)
    })
})

app.listen(5000,function(req,res){
    console.log("server is running on port 5000")
})