import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected mongodb")
}).catch(() => {
    console.log(" Not Connected mongodb")
})