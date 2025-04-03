import { connect } from "mongoose";
import "dotenv/config.js"
const connectToMongoDb = async () => {
    const URL = process.env.DATABASE
    try {
        await connect(URL,{useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            autoIndex: false, // Disable automatic index creation
            }
            )
        console.log("database connected successfully")
    } catch (error) {
        console.log("DAtabase not connected sorry", error)
    }


}
export default connectToMongoDb;