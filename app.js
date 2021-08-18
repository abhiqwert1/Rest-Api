const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

//connect to mongobd
mongoose.connect("mongodb://localhost:27017/letterdb", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
mongoose.set('useFindAndModify', false);


app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", require("./routes/api"));  //initialize routes

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});


app.listen(3000, function(req, res){
    console.log("Server is running on port 3000.!");
});