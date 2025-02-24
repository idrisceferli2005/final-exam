import express from 'express'
import productRouter from './src/routes/productRouter.js'
import 'dotenv/config'
import "./src/db/dbConnection.js"
import cors from "cors"


const port = process.env.PORT || 5001
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/products", productRouter)


app.listen(port, () => {
    console.log(`${port}`)
})
