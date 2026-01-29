import express from "express"
import globalerror from "./middleware/globalError.js";
import logReq from "./middleware/logReq.js";
import dotenv from "dotenv";
import db from "./database/conn.js";
import notFound from "../Boilerplate_JS/middleware/notFound.js";

// Setup
dotenv.config() // loads the env file
const port = process.env.PORT || 3015
const app = express()


// Middleware
app.use(express.json()) // allows to use json like getting req.body

app.use(logReq);



// Routes
app.get('/', (_req, res, _next) => {
    res.send('Hello!')
})

// Error Middleware
app.use(notFound)
app.use(globalerror)

// Listener
app.listen(port, ()=> {
    console.log(`server is running on PORT: ${port}`)
})