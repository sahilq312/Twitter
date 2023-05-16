import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    image:{
        type: String,
        default: ''
    },
    likes:{
        type: Array,
        default: []
    }

})
const Post = mongoose.model("post", PostSchema);

export default Post ;