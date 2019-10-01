const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/bigData', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err)
    });
this.db = mongoose.connection

module.exports = this.db