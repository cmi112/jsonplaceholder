const mongoose=require("mongoose")
// Creating a schema
const CommentSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
 body:{
    type:String,
    required:true
  },
  postId:{
    type:Number,
    required:false
  },
  
})
module.exports=mongoose.model("Comments",CommentSchema)
