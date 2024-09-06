import express from "express"
const router = express.Router()
import fetchUser from "../middleware/fetchUser.js"
import Notes from "../model/Notes.js"
// Router 1 : -Get all the notes using GET "api/notes/fetchallnotes", login required

router.get("/fetchallnotes", fetchUser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.userId })
        res.json(notes)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error")
    }


})



router.post("/addnote", fetchUser, async (req, res) => {
    try {
        // Data we will be getting from the frontend
        const { title, description, tag } = req.body;

        // Validation
        if (!title || !description || !tag) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new note
        const note = new Notes({ title, description, tag, user: req.userId });

        // Save the note to the database
        const savedNote = await note.save();

        // Return the saved note as a response
        res.json({ savedNote, success: "Notes Added successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

// update ntoes



router.put("/updatenote/:id", fetchUser, async (req, res) => {

    // data coming from the frontend body
    const { title, description, tag } = req.body

    const { id } = req.params

    try {

        const note = await Notes.findById({ _id: id })

        // validation
        if (!note) {

            return res.status(404).send("Not Found")

        }
        if (note.user.toString() !== req.userId) {

            return res.status(401).send("Not Allowed")

        }

        console.log(note)
        // note update
        const notes = await Notes.findByIdAndUpdate({ _id: id }, {

            $set: {

                title,
                description,
                tag



            }

        }, { new: true })
        res.json({ notes, success: "Notes updated successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})

// DElete a note

router.delete("/deletenote/:id", fetchUser, async (req, res) => {

    try {

        const note = await Notes.findById(req.params.id)
        console.log(note)
        if (!note) {

            return res.status(404).send("not found")
        }
        // Allow deletion only if the user owns this note


        if (note.user.toString() !== req.userId) {

            return res.status(401).send("not allowd")

        }
        const deletedNote = await Notes.findByIdAndDelete(req.params.id)
        res.json({ success: "Note has been deleted", note: deletedNote });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})


// router to get the notes by id

router.get("/notes/:id", fetchUser, async (req, res) => {

    try {

        const { id } = req.params

        const notes = await Notes.findById({ _id: id })
        console.log(notes)
        if (notes) {

            return res.status(200).json({ notes, success: "Notes updated successfully" })
        }
        else {

            return res.status(404).json({ error: "Notes not found" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})


export default router