const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.use((req, res) => {
    // res.sendFile(path.join(__dirname,'public', 'index.html'), {
    //     root: __dirname
    // })
    res.render('index', {
        title: process.env.USER_ID,
        message: 'Hello World'
    })
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`server listening at port ${process.env.PORT || 3001}`)
})
