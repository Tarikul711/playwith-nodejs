const { Schema, model } = require('mongoose')

// title, description, salary/ Preferredlocation, Preferredclassess, Preferred subject,  package, isPrimem, time, sample video.
const tutorSchema = new Schema({
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'Tutor',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true
    },
    location: [{
        type: String,
        trim: true
    }],
    classess: {
        type: String,
        trim: true
    },
    subjects: [{
        type: String,
        trim: true
    }],
    packages: [{
        type: String,
        trim: true
    }],
    isPrimem: {
        type: String,
        trim: true
    },
    sample_video: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

const TutorPost = model('TutorPost', tutorSchema)
module.exports = TutorPost