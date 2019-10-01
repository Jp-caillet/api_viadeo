const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Etherpe', {
    useNewUrlParser: true
})

this.db = mongoose.connection
this.db.on('error', () => {
    res.status(500).json({
        'code': 500,
        'message': 'Internal Server Error'
    })

    console.error(`[ERROR] user/create getModel() -> Connetion fail`)
})

module.exports = this.db