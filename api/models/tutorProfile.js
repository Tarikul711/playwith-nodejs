const { Schema, model } = require('mongoose')

const tutorProfileSchema = new Schema({
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    bio: {
        type: String,
        trim: true,
    },
    userProfilePic: {
        type: String,
        required: true
    },
    links: {
        facebook: String,
        youtube: String
    }
}, {
    timestamps: true
})

const TutorProfile = model('TutorProfile', tutorProfileSchema)
module.exports = TutorProfile