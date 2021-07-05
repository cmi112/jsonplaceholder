const express=require("express")
const app=express()
const mongoose=require("mongoose")
const port=5000;
// const bodyParser=require("body-parser")
const cors=require("cors")
require("dotenv/config")
// middleware
app.use(cors())
app.use(express.json())

// impoer Routes
// Middlewares
app.use(express.static(__dirname+"/views/build"))
const postRoute=require("./routes/posts")
const commentRoute=require("./routes/comments")
const userRoute=require("./routes/users")
app.use("/comments",commentRoute)
app.use("/posts",postRoute)
app.use("/users",userRoute)



app.use("/posts",()=>{
  console.log("This is middleware running ");
})


// Routes
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/views/build/index.html")
})



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true } ,()=>{
  console.log("Connected to DB");
})


// Listening to the server
app.listen(port,()=>console.log("Server started on port " + port))