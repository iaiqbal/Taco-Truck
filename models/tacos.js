// Import
const orm = require("../config/orm.js");
const taco = {
    // Show all the tacos in the db.
    selectAll: function (cb) {
        orm.selectAll("tacos", function (res) {
            cb(res);
        });
    },
    // Add a new taco.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("tacos", cols, vals, function (res) {
            cb(res);
        });
    },
    // Change the status.
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("tacos", objColVals, condition, function (res) {
            cb(res);
        });
    },
};

// Export at the end of the burger.js file.
module.exports = taco;