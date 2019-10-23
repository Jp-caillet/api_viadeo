const Schema = require('mongoose').Schema

module.exports = new Schema({
    nom: String,
    prenom: String,
    url: {
        type: String,
        unique: true,
        required: true
    },
    Photo: {
        type: String,
        unique: true
    },
    description: String,
    parcours: Array,
    competence: Array,
    langues: Array,
    interet: Array,
    relation: Array
}, {
    collection: 'users',
    versionKey: false
})