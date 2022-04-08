
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    email: String,
})


module.exports = mongoose.model('admin', adminSchema)