const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reg: {
        type: String,
        required: true
    },
 
});

module.exports = mongoose.model("Student",StudentSchema);