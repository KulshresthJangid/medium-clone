const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log('db server connected')
}).catch((e) => {
    console.log('error while connecting to db', e)
})

