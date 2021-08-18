const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create letter Schema & model
const LetterSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
});

const Letter =  mongoose.model("letter", LetterSchema);

module.exports = Letter;