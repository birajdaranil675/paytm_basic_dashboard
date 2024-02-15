const mongoose = require('mongoose');
const { Schema } = require('zod');

mongoose.connect("mongodb+srv://birajdaranil675:y3qPqwyFZrhfldSU@cluster0.gw1nk4t.mongodb.net/Paytm");

// Create a Schema for Users
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
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Create a model from the user schema
const User = mongoose.model('User', userSchema);

//create a schema for accounts
const accountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance : {
        type: Number,
        required: true
    },
});
// Create a model from the account schema
const Account = mongoose.model("Accounts", accountSchema);

module.exports = {
	User,
    Account
};