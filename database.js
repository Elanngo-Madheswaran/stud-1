require('dotenv').config();
const mongoose = require('mongoose');
 
const uri = process.env.SURI;

const connectdb = async () =>{
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Mongo db error :",error.message)
    }
}

module.exports = connectdb;