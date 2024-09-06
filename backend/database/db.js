import { connect } from "mongoose";
import "dotenv/config.js"
const connectToMongoDb = async () => {
    const URL = process.env.DATABASE
    try {
        await connect(URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log("DAtabase not connected sorry", error)
    }


}
export default connectToMongoDb;