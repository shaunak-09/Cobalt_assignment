const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId:String,
    username:String,
    email:String,
    image:String
});

module.exports = mongoose.model('user', userSchema);