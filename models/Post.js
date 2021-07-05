const mongoose=require("mongoose")
// Creating a schema
const PostSchema=mongoose.Schema({
  title:{
    type:String,
    required:true
  },
 body:{
    type:String,
    required:true
  },
  userId:{
    type:Number,
    required:true
  },
  // date:{
  //   type:Date,
  //   default:Date.now
  // }
})
module.exports=mongoose.model("Posts",PostSchema)
