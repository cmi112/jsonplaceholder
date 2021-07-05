const express=require("express")
const router=express.Router()
const User=require("../models/Users")


// Get back all comments
router.get("/",async (req,res)=>{
  try{
    const users=await User.find()
    res.json(users)
  }catch(err){
    res.json({message:err})
  }
})
  
router.get("/",async (req,res)=>{
  const user=new Users({
    userId:req.body.userId,
    id:req.body.id,
    title:req.body.title,
    completed:req.body.completed
  })
  try{
    console.log(user);
    await user.save()
    res.send(user)
  }catch(err){
    res.json({Message:err})
  }
})  


module.exports=router