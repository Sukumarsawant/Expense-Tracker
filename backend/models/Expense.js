const mongoose = require  ('mongoose');
const expenseSchema = mongoose.Schema({
    label: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: String, required: true },
})

module.exports = mongoose.model("Expence",expenseSchema)