const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/productManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established"))
    .catch(() => console.log("Err..", err))