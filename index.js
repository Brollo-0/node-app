import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then( ()=> {
    console.log("Database Connected Successfully")

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error) => console.log(error))