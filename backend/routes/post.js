const express = require("express")
const Favorite = require("../favorite.js")

const router = express.Router()

router.post('/', async (req, res) => {
    console.log(req.body)
    const { userId, favorite } = req.body

    try {
        const checkUser = await Favorite.findOne({ userId })
        if (checkUser) {
            res.status(500).json({ message: "User already exists" })
        } else {
            const newFavorite = new Favorite({ userId, favorite })
            const savedFavorite = await newFavorite.save()
            res.status(200).json(savedFavorite)
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
})

module.exports = router


