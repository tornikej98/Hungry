const { mongoose } = require('./index')
const bcrypt = require('bcrypt')


const Schema = mongoose.Schema


const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },



},

    { collection: 'user-data' }
)


userSchema.static.signUp = async (email, password) => {

    if (!email || !password) {
        throw Error('Please enter email and password')
    }

    const emailExists = await this.findOne({ email })

    if (emailExists) {
        throw Error('This email already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user
}

userSchema.static.login = async (email, password) => {
    if (!email || !password) {
        throw Error('Please enter email and password')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('incorrect email')
    }

    const userPass = await bcrypt.compare(password, user.password)
    if (!userPass) {
        throw Error('incorrect password')
    }

    return user
}

const User = mongoose.model('UserData', userSchema)

module.exports = User
