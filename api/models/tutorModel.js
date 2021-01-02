const { Schema, model } = require('mongoose')

const tutorSchema = new Schema({
    _id: Schema.Types.ObjectId,
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^(?:\+?88|0088)?01[15-9]\d{8}$ /
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