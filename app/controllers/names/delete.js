// Dependencies
const mongoose = require('mongoose')
const validator = require('node-validator')
const db = require('../../db.js')
const _ = require('node-validator')




// Core

const check = _.isObject().withRequired('name', _.isString())

module.exports = class Show {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/name/delete', validator.express(check), async(req, res) => {
            try {
                // Save

                const result = await db.collection('names').remove({ prenom :req.body.name })
                res.status(200).json(result)

            } catch (e) {
                console.error(`[ERROR] user/searchByEmail -> ${e}`)
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