
const mongoose = require('mongoose')

const aboutsSchema = new mongoose.Schema({
    about_text: String,
    about_id: String,
})


module.exports = mongoose.model('about', aboutsSchema)