import mongoose from "mongoose";

const basicSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },

})

const Basic = mongoose.model("Basic", basicSchema)

export default Basic