require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/index')
const db = require('./models/index')

const port = process.env.PORT

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use('/', router)


const start = async () => {
    try {
        await db.sequelize.authenticate()
        await db.sequelize.sync()
        app.listen(port, () => console.log(`App works successfully, port: ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()