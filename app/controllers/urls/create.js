// Dependencies
const Schema = require('../../models/url.js')
const _ = require('node-validator')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'
const db = require('../../db.js')

// Core
const check = _.isObject().withRequired('url', _.isString())

module.exports = class Create {
    constructor(app) {
        this.app = app
        this.run()
        this.Schema = Schema.plugin(uniqueValidator)
    }

    /**
     * Data base connect
     * @paramp {Object} res
     * @return {Object} model
     */
    getModel(payload) {
        const Url = db.model('Url', this.Schema)
        const model = new Url

        model.url = payload.url

        return model
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/url/create', (req, res) => {
            try {
                console.log(req.body)
                    // Save
                this.getModel(req.body).save((err, result) => {
                    if (err) {
                        res.status(401).json({
                                'code': 401,
                                'message': "url already exist"
                            })
                            //console.error(`[ERROR] url/create middleware() -> ${err}`)
                    }

                    res.status(200).json(result)
                })
            } catch (e) {
                console.log('error -> ', e)
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