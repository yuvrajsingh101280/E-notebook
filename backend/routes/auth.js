import express from "express"
import User from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config.js"
import fetchUser from "../middleware/fetchUser.js"
const router = express.Router()
//* ROUTE 1 : Create a User using: POST "/api/auth/signup". No login required
router.post("/signup", async (req, res) => {
    // data coming from the body (frontend)
    const { name, email, password } = req.body;

    try {
        // validation
        if (!name || !email || !password) {

            return res.status(400).json({ error: "All fields are required bro" })

        }


        if (!email.includes("@")) {

            return res.status(400).json({ error: "Invalid Email" })

        } //* Find Unique User with email
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "User already exists" })

        }



        // generate salt


        const salt = await bcrypt.genSalt(10)

        // has the password

        const hashedPassword = await bcrypt.hash(password, salt)
        // save data into databse

        const newUser = User({

            name, email, password: hashedPassword

        })
        await newUser.save()
        console.log(newUser)

        res.status(201).json({ success: "Signup successfully" })
    } catch (error) {


        console.log(error)
        res.status(500).send("Internal Server Error")

    }

})


router.post("/login", async (req, res) => {

    // destructure the data from the body that we will get from the body

    const { email, password } = req.body;



    try {

        // validation


        if (!email || !password) {

            return res.status(400).json({ error: "All fields are required" })

        }
        if (!email.includes("@")) {
            return res.status(400).json({ error: "Please Enter a valid email" })
        }
        // find unique user with Email



        const user = await User.findOne({ email })
        console.log(user)
        // If the user not exits
        if (!user) {

            return res.status(400).json({ error: "User Not found" })

        }
        // mathing user password to hash password  with bcrypt.compare()

        const doMatch = await bcrypt.compare(password, user.password)
        // console.log(doMatch)
        if (doMatch) {

            const token = jwt.sign({ userId: user.id }, "" + process.env.JWT_SECRET, { expiresIn: "7d" })
            res.status(201).json({ token, success: "Login Successfully" })
        }
        else {

            res.status(404).json({ error: "Email and password not found" })

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error" })
    }




})
router.get("/getuser", fetchUser, async (req, res) => {


    try {

        const userId = req.userId
        console.log("getuser Id", userId)
        const user = await User.findById(userId).select("-password")
        res.send(user)

    } catch (error) {
        res.status(500).send("Internal Server Error")
    }


})


export default router
