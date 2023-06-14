const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const SECRET_KEY = process.env.SECRET_KEY || 'password12345'

const authMiddleware = async (req, res, next) => {

    const { authorization } = req.headers
    if (!authorization) {
        return res.sendStatus(403)
    }
    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, SECRET_KEY)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (err) {
        console.log(err)
        res.sendStatus(401)
    }
}


module.exports = authMiddleware
