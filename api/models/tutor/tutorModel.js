const { Schema, model } = require('mongoose')

const tutorSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'TutorProfile'
    }

}, {
    timestamps: true
})

const Tutor = model('Tutor', tutorSchema)
module.exports = Tutor