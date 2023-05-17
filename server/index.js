import 'dotenv/config'
import express from "express";
import mongoose from 'mongoose';
import authController from "./controllers/Auth.js"
import postController from './controllers/Post.js';
import userController from './controllers/User.js';


const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));


app.use("/auth", authController)
app.use("/post", postController)
app.use("/user", userController)

app.listen(process.env.PORT, ()=>{
    console.log("App is running");
})