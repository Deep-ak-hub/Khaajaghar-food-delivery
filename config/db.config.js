const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected✅");
    } catch(exception) {
        console.log("Mongodb connection failed: ", exception.message);
    }
}

module.exports = connectDB