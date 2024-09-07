import "dotenv/config.js"
import jwt from 'jsonwebtoken'
import "dotenv/config.js"
const fetchUser = (req, res, next) => {


    // GEt the user from the jwt token and add id to req object
    const token = req.header("auth-token")

    if (!token) {

        res.status(401).send({ error: "please login first" })

    }

    try {


        const { userId } = jwt.verify(token, "" + process.env.JWT_SECRET)

        req.userId = userId
        console.log("Fetchuser:", userId)
        next()//If verified then execute the next function

    } catch (error) {
        console.log("JWT verififcation error:", error)
        res.status(401).send({ error: "please login first" })

    }



}
export default fetchUser
