const Schema = require('mongoose').Schema

module.exports = new Schema({
    url: {
        type: String,
        unique: true,
        required: true
    }
}, {
    collection: 'urls',
    versionKey: false
})