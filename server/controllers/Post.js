import express from "express";
import Post from "../models/Post.js";
import authController from "./Auth.js";
const postController = express.Router();


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
export default postController;