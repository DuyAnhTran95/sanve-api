const mongoose = require('mongoose');

const webUserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    type: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: -1
    },
    permission: {
        type: [String],
    },
    refresh_token: {
        type: String
    },
    confirm_token: {
        type: String
    },

});


const WebUser = mongoose.model('web_user', webUserSchema)

module.exports = WebUser