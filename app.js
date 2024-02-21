const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const path = require('path')
const router = require('./routes/index')

const app = express()

app.set('port', 5050)
app.use(morgan('dev'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/index'))

router.use((req, res, next) => {
    res.send('404 not found')
})

app.listen(app.get('port'))
console.log('LISTENNING ON PORT', app.get('port'))
