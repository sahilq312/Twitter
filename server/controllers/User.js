import express from "express";
const userController = express.Router();
import User from "../models/User.js";
import authController from "./Auth.js";


authController.delete("/delete", (req,res)=>{

})


authController.put("/update", (req,res)=>{
    
})

export default userController;