import 'dotenv/config'
import express from "express";
const authController = express.Router();
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;

authController.post("/register", async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass
  const newUser = new User(req.body);
  const {username} = req.body
  try {
    // addition new
    const oldUser = await User.findOne({ username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // changed
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
authController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const validity = bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          {username: user.username, id: user._id},
          process.env.JWT_SECRET,
          {expiresIn:"2hr"}
        )
        res.status(200).json("logged in");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (err) {
    res.status(500).json({message:"wrong"});
  }
})

export default authController;
