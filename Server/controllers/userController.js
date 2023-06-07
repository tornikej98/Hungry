const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || 'password12345'


const createToken = (_id) => {
    return jwt.sign({ _id }, SECRET_KEY, { expiresIn: "1d" })
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        const accessToken = createToken(user._id)
        res.status(200).json({ email, accessToken })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

exports.registerUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.signUp(email, password)

        const accessToken = createToken(user._id)
        res.status(200).json({ email, accessToken })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}