import express from "express";
const userController = express.Router();
import User from "../models/User.js";

userController.delete("/:id", (req,res)=>{
   const userID = req.params.id;
   User.findByIdAndDelete(userID).then((err) => {
    //console.log("result")
    if (err) {
      res.json(err)
    }else{
    res.status(200).json({message:"deleted"})}
})
})

export default userController;