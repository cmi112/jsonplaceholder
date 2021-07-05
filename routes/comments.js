const express=require("express")
const router=express.Router()
const Comment=require("../models/Comments")





// Get back all comments
router.get("/",async (req,res)=>{
  try{
    const comments=await Comment.find()
    res.json(comments)
  }catch(err){
    res.json({message:err})
  }
})

router.get("/",async (req,res)=>{
  // console.log(req.body);
  const comment=new Comments({
    name:req.body.name,
    email:req.body.email,
    body:req.body.body,
    postId:req.body.postId
  });
  try{
console.log(comment);
   await comment.save()
   res.send(comment)
  } catch(err){
    res.json({message:err})
  }

})


// Delete Post
// router.delete("/:postId", async (req,res)=>{
//   try{
//     const removedPost=await Post.remove({_id: req.params.postId})
//     res.json(removedPost)
//   }catch(err){
//     res.json({message:err})
//   }
// })

// // Update a post
// router.patch("/:postId",async (req,res)=>{
//   try{
//     const updatedPost=await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}})
//     res.json(updatedPost)
//   }catch(err){
//     res.json({message:err})
//   }
// })

module.exports=router