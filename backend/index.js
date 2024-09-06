import connectToMongoDb from "./database/db.js";
import express from "express"
import auth from './routes/auth.js'
import notes from "./routes/notes.js"
import cors from "cors"

connectToMongoDb();


const app = express()

const port = 4000;
// middleware

app.use(express.json())
app.use(cors())

// Available Routes

app.use("/api/auth", auth);//here we have used app.use to link the route we have made
app.use("/api/notes", notes)


app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)

})


