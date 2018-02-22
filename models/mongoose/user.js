const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    occupation: String
});

mongoose.model('users', userSchema);