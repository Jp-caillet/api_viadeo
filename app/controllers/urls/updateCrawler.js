// Dependencies
const Schema = require('../../models/url.js')
const _ = require('node-validator')
const db = require('../../db.js')
const mongoose = require('mongoose')


// Core
const check = _.isObject().withRequired('url', _.isString())

module.exports = class Create {
    constructor(app) {
        this.app = app
        this.run()
    }


    /**
     * Middleware
     */
    middleware() {
        this.app.post('/url/update/crawl', _.express(check), async(req, res) => {
            try {
                // Save
                const update = await db.collection('tests').findOneAndUpdate({
                    "url": req.body.url

                }, {
                    $set: {
                        "crawler": "1"
                    }
                })

                res.status(200).json(update)

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