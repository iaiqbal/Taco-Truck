const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const taco = require("../models/tacos.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    taco.selectAll(function (data) {
        var hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tacos", function (req, res) {
    taco.insertOne([
        "taco_name" 
    ], [
            req.body.taco_name
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/tacos/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    cat.updateOne({
        picked_up: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

module.exports = router;
