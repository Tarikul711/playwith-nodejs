const TutorProfile = require('../../models/tutor/tutorProfile')
const Tutor = require('../../models/tutor/tutorModel')



exports.getTutorProfileData = (req, res, next) => {
    res.send('<h1>for get user profile information</h1>')
}

exports.postTutorProfileData = (req, res, next) => {
    try {
        let { name, email, bio, userProfilePic, links } = req.body
        const tutorProfile = new TutorProfile({
            name,
            email,
            bio,
            userProfilePic,
            links
        })
        console.log(tutorProfile)
        let createTutorProfile = await tutorProfile.save()
        console.log('Tutor created successfully ', createTutorProfile)
        res.status(200).json(createTutorProfile)
    } catch (e) {
        console.log(e)
        next(e)
    }
}


exports.editTutorProfileData = (req, res, next) => {
    try {

    } catch (e) {
        console.log(e)
        next(e)
    }
}