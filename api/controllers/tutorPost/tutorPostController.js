const TutorPost = require('../../models/tutorPost/tutorPost')
const TutorProfile = require('../../models/tutor/tutorProfile')
const Tutor = require('../../models/tutor/tutorModel')
const TutorServices = require('../../services//TutorServices')


exports.tutorPostGetController = async(req, res, next) => {
    try {
        const tutorPostData = await TutorPost.find({})
        res
            .status(200)
            .json({ 'data': tutorPostData })
            // have to implement pagination adn seach option
    } catch (err) {
        console.log(err)
        next(err)
    }
}

exports.tutorPostPostController = async(req, res, next) => {
    try {
        const tutorData = await TutorServices.getTutorFromToken(req)
        if (!tutorData) {
            return res
                .status(500)
                .json({ 'message': 'User is not valid' })
        }
        // check user profile is completed or not...
        const tutorProfile = await TutorProfile.findOne({ tutor: tutorData._id })
        if (!tutorProfile) {
            return res
                .status(500)
                .json({ 'message': 'Please complete your profile first' })
        }
        // now user can create a post
        const { title, description, salary, location, classess, subjects, packages, isPrimem, sample_video } = req.body

        const tutorPost = new TutorPost({
            tutor: tutorData._id,
            title,
            description,
            salary,
            location,
            classess,
            subjects,
            packages,
            isPrimem,
            sample_video
        })

        const createTutorPost = await tutorPost.save()
        console.log(createTutorPost)
        res
            .status(201)
            .json({ 'data': createTutorPost })
    } catch (err) {
        console.log(err)
        next(err)
    }
}