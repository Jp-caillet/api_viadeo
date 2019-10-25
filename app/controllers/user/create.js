// Dependencies
const Schema = require('../../models/user.js')
const validator = require('node-validator')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'
const db = require('../../db.js')
const mongoose = require('mongoose')
const emailExistence = require('email-existence')

// Core
const check = validator.isObject()
    .withRequired('url', validator.isString())
    .withOptional('nom', validator.isString())
    .withOptional('prenom', validator.isString())
    .withOptional('actualPoste', validator.isString())
    .withOptional('resume', validator.isString())
    .withOptional('photo', validator.isString())
    .withOptional('nbFriend', validator.isNumber())
    .withOptional('localisation', validator.isString())
    .withOptional('description', validator.isString())
    .withOptional('parcours', validator.isArray())
    .withOptional('competence', validator.isArray())
    .withOptional('langues', validator.isArray())
    .withOptional('interet', validator.isArray())
    .withOptional('email', validator.isObject()
        .withOptional('nomP', validator.isString())
        .withOptional('pNom', validator.isString()))

module.exports = class Create {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Data base connect
     */
    getModel(res, payload) {

        Schema.plugin(uniqueValidator)
        const User = mongoose.model('User', Schema)
        const model = new User

        model.url = payload.url
        model.prenom = payload.prenom
        model.actualPoste = payload.actualPoste
        model.nom = payload.nom
        model.resume = payload.resume
        model.photo = payload.photo
        model.nbFriend = payload.nbFriend
        model.localisation = payload.localisation
        model.description = payload.description

        for (let i = 0; i <= payload.parcours.length - 1; i++) {
            model.parcours.push(payload.parcours[i])
        }

        model.competence = payload.competence
        model.langues = payload.langues
        model.interet = payload.interet
        model.email.nomP = payload.email.nomP
        model.email.pNom = payload.email.pNom

        return model

    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/user/create', validator.express(check), (req, res) => {
            try {
                // Save

                this.getModel(res, req.body).save((err, result) => {
                    if (err) {
                        res.status(401).json({
                                'code': 401,
                                'message': "user already exist"
                            })
                            //console.error(`[ERROR] user/create middleware() -> ${err}`)
                    }

                    res.status(200).json(result)
                })
            } catch (e) {
                console.log("create user")
                console.error(`[ERROR] user/create -> ${e}`)
                res.status(400).json({
                    'code': 400,
                    'message': 'Bad request'
                })
            }
        })
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}