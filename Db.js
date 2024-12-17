const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Deepfake:deepfake@cluster0.3zpx7oc.mongodb.net/deepfake");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 4
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    apiHitCount: {
        type: Number,
        default: 0
    }    
});

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}