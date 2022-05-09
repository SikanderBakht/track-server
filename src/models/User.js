const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mogoose.model('User', userSchema)