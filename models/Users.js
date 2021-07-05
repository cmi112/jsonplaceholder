const mongoose=require("mongoose")
// Create  A Schema
const UserSchema=mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  id:{
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  completed:{
    type:String,
    required:true
  }

})



module.exports=mongoose.model("Users",UserSchema)

