const mongoose = require("mongoose")

const champion = mongoose.model("champion", {
    Id: String,
    Name: String,
    Class: String,
    Style: String,
    Difficulty: String,
    DamageType: String,
    Damage: String,
    Sturdiness: String,
    CrowdControl: String,
    Mobility: String,
    Functionality: String
})

module.exports = champion