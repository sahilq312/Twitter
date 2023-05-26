import express from "express";
const userController = express.Router();
import User from "../models/User.js";

userController.getUser("/:id", (req, res) => {
  const userID = req.params.id;

  try {
    const user = User.findById(id);
    if (user) {
      const { password, ...otherdetail } = user._doc;

      res.status(200).json(otherdetail);
    } else {
      res.status(404).son("no such user");
    }
  } catch (error) {
    res;
  }
});

//delete user
userController.delete("/:id", (req, res) => {
  const userID = req.params.id;
  User.findByIdAndDelete(userID).then((err) => {
    //console.log("result")
    if (err) {
      res.json(err);
    } else {
      res.status(200).json({ message: "deleted" });
    }
  });
});

export default userController;
