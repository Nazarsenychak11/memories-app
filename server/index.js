import express from 'express'
import bodyParser from 'body-parser'
import mongoose  from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts/', postRoutes)

// mongo
const CONNECTION_URL = 'mongodb+srv://Zariy:nazar1993@cluster0.zj9sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server runing ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);а