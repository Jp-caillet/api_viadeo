// Dependencie
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const server = require('http')



// Core
const routes = require('./controllers/route.js')

/**
 * Server
 */
module.exports = class Server {
    constructor() {
        this.app = express()
        this.server = server.createServer(this.app)
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.use(compression())
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({
            'extended': true
        }))
        this.app.use(bodyParser.json())
    }

    /**
     * Routes
     */
    routes() {

        new routes.user.UserCreate(this.app)
        new routes.name.NamesShows(this.app)
        new routes.name.NamesShowOne(this.app)
        new routes.name.NamesDeletes(this.app)
        new routes.url.UrlCreate(this.app)
        new routes.url.UrlShows(this.app)
        new routes.url.UrlUpdateExploit(this.app)
        new routes.url.UrlShowOne(this.app)
        new routes.url.UrlShowOneCrawl(this.app)
        new routes.url.UrlUpdateCrawl(this.app)


        // If route not exist
        this.app.use((req, res) => {
            res.status(404).json({
                'code': 404,
                'message': 'Not Found'
            })
        })
    }

    /**
     * Security
     */
    security() {
        this.app.use(helmet())
        this.app.disable('x-powered-by')
    }

    /**
     * Run
     */
    run() {
        this.security()
        this.middleware()
        this.routes()
        this.server.listen(4000)
        console.log('connected port 4000')
    } catch (e) {
        console.error(`[ERROR] Server -> ${e}`)
    }
}