import express from "express";
const authController = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

authController.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  const { username } = req.body;
  try {
    // addition new
    const oldUser = await User.findOne({ username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    // changed
    else {
      const user = await newUser.save();
      res.status(200).json({ message: "registreation successfull" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

authController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const isExisting = await User.findOne({ email });
    if (isExisting) {
      
      res.status(200).json({ messsage: "logged in" });
    }
  } catch (error) {
    res.status(500).json({ message: "no user found" });
  }
});

export default authController;
