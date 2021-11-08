const mongoose = require("mongoose")

const cd = mongoose.model("cd", {
    name: String,
    id: String,
    title: String,
    blurb: String,
    tags: Array
})

module.exports = cd