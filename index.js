const express = require('express');
const { engine, create } = require('express-handlebars');
require('dotenv').config()
require('./src/database/db')

const app = express()
const PORT = process.env.PORT || 4000
const hbs = create({
    extname: '.hbs',
    partialsDir: ["src/views/components"]
})
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')
app.set('views', './src/views')



// MIDDLEWARE
app.use(express.static(__dirname + '/src/public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', require('./src/routes/index.routes'))
app.use('/auth', require('./src/routes/auth.routes'))


app.listen(PORT, () => console.log('server on', PORT))