const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    fullname: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})

module.exports = model('User', UserSchema);