const mongoose = require("mongoose")

const item = mongoose.model("item", {
    item_id: String,
    name: String
})

module.exports = item