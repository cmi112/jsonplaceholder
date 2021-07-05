const express=require("express")
const router=express.Router()
const Post=require("../models/Post")
const Comments=require("../models/Comments")



// Get back all the Posts
router.get("/",async (req,res)=>{
  try{
const posts= await Post.find()
res.json(posts)
  }catch(err){
    res.json({Message:err})
  }
})
// Submits a post

router.post("/",async (req,res)=>{
  // console.log(req.body);
  const post=new Post({
    title:req.body.title,
    body:req.body.body,
    userId:req.body.userId
  });
  try{
console.log(post);
   await post.save()
   res.send(post)
  } catch(err){
    res.json({message:err})
  }

})

// Specific Post
router.get("/:postId",async (req,res)=>{
  try{
    console.log("postId");
    const post=await Post.findOne({id:Number(req.params.postId)})
    console.log(post);
    res.json(post)
  }catch(err){
    res.json({message:err})
  }
})

// Comments

// router.get("/comments",async (req,res)=>{
//   // console.log(req.body);
//   console.log(req.body);
//   const comment=new Comments({
//     name:req.body.name,
//     body:req.body.body,
//     email:req.body.email,
//     userId:req.body.userId
//   });
//   try{
// console.log(comment);
//    await comment.save()
//    res.json(comment)
//   } catch(err){
//     res.json({message:err})
//   }

// })


// router.get("/comments",async (req,res)=>{
  // console.log(req.body);
//   const comment=new Comments({
//     name:req.body.name,
//     email:req.body.email,
//     body:req.body.body,
//     userId:req.body.userId
//   });
//   try{
// console.log(comment);
//    await comment.save()
//    res.send(comment)
//   } catch(err){
//     res.json({message:err})
//   }

// })

// Delete Post
router.delete("/:postId", async (req,res)=>{
  try{
    const removedPost=await Post.remove({_id: req.params.postId})
    res.json(removedPost)
  }catch(err){
    res.json({message:err})
  }
})

// Update a post
router.patch("/:postId",async (req,res)=>{
  try{
    const updatedPost=await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}})
    res.json(updatedPost)
  }catch(err){
    res.json({message:err})
  }
})

module.exports=router