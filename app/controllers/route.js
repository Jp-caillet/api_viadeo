const NamesShows = require('./names/shows.js')
const NamesShowOne = require('./names/showFirst.js')
const NamesDeletes = require('./names/delete.js')
const UserCreate = require('./user/create.js')
const UrlCreate = require('./urls/create.js')
const UrlShows = require('./urls/shows.js')
const UrlShowOne = require('./urls/showFirstExploit.js')
const UrlUpdateExploit = require('./urls/updateExploit.js')
const UrlShowOneCrawl = require('./urls/showFristCrawl.js')
const UrlUpdateCrawl = require('./urls/updateCrawler.js')



module.exports = {
    user: {
        UserCreate
    },
    name: {
        NamesShows,
        NamesDeletes,
        NamesShowOne
    },
    url: {
        UrlCreate,
        UrlShows,
        UrlUpdateExploit,
        UrlShowOne,
        UrlShowOneCrawl,
        UrlUpdateCrawl
    }

}