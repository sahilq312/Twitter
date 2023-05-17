import express from "express";
import Post from "../models/Post.js";
import authController from "./Auth.js";
const postController = express.Router();

//create post
postController.post("/createpost", async(req,res)=>{
    const newPost = new Post(req.body);

    newPost.save()
    .then(post => {
      console.log('Post saved:', post);
      res.status(200).json({message:"post saved"})
    })
    .catch(error => {
      console.error('Error saving post:', error);
    });
})
//delete post
postController.delete("/:id", (req,res)=>{
  const postID = req.params.id;
  Post.findByIdAndDelete(postID).then((err) => {
    //console.log("result")
    if (err) {
      res.json(err)
    }
    res.status(200).json({message:"deleted"})
})
})
//get timeline
postController.get("/timeline", (req,res)=>{
  Post.find().then((err, posts) => {
    //console.log("result")
    if (err) {
      res.send(err)
    }
    res.json(posts)
  })
})

export default postController;