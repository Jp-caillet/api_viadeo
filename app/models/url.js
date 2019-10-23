const Schema = require('mongoose').Schema

module.exports = new Schema({
    url: {
        type: String,
        unique: true,
        required: true
    },
    exploit: String,
    crawler: String
}, {
    collection: 'tests',
    versionKey: false
})