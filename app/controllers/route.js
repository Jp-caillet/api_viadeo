const NamesShows = require('./names/shows.js')
const NamesShowOne = require('./names/showFirst.js')
const NamesDeletes = require('./names/delete.js')
const UserCreate = require('./user/create.js')
const UrlCreate = require('./urls/create.js')


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
        UrlCreate
    }

}