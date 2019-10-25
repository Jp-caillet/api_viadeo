const Schema = require('mongoose').Schema

module.exports = new Schema({
    nom: String,
    prenom: String,
    actualPoste: String,
    url: {
        type: String,
        unique: true,
        required: true
    },
    photo: {
        type: String
    },
    nbFriend: Number,
    localisation: String,
    description: String,
    resume: String,
    parcours: [{
        posteName: String,
        entreprise: String,
        duree: String

    }],
    competence: [],
    langues: [],
    interet: [],
    email: {
        nomP: String,
        pNom: String
    }
}, {
    collection: 'users',
    versionKey: false
})