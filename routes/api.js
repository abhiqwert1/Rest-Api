const express = require("express");

const router = express.Router();
const Letter = require("../models/letter");

//get a list of letters from the db
router.get("/letters", function(req, res, next){
    res.send({type: "GET"});
});

//add a new letters to the db
router.post("/letters", function(req, res, next){
    console.log(req.body);
    Letter.create(req.body).then(function(letter){
        res.send(letter);
    }).catch(next);
});

//update a letter in the db
router.put("/letters/:id", function(req, res, next){
    Letter.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(letter){
        res.send(letter);
    })
    
    
});

//delete a letter in the db
router.delete("/letters/:id", function(req, res, next ){
    Letter.findByIdAndRemove({_id: req.params.id}).then(function(letter){
        res.send(letter);
    });
});

module.exports = router;