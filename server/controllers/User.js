import express from "express";
import User from "../models/User.js";

const userController = express.Router();

// Get user
userController.get("/getuser/:id", async (req, res) => {
  const userID = req.params.id;

  try {
    const user = await User.findById(userID);

    if (user) {
      const { password, ...otherDetail } = user._doc;

      res.status(200).json(otherDetail);
    } else {
      res.status(404).json("No such user");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete user
userController.delete("/delete/:id", (req, res) => {
  const userID = req.params.id;

  User.findByIdAndDelete(userID)
    .then(() => {
      res.status(200).json({ message: "Deleted" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

export default userController;

