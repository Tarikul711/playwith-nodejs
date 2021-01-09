const TutorProfile = require('../../models/tutor/tutorProfile')
const Tutor = require('../../models/tutor/tutorModel')
const TutorServices = require('../../services//TutorServices')


exports.createTutorProfileGetController = async(req, res, next) => {
    try {
        let getTutor = await TutorServices.getTutorFromToken(req)
        res.send(`<h1>for get user profile information</h1> ${getTutor.phoneNumber} = ${res}  - `)
    } catch (e) {
        console.log(e)
        next(e)
    }

}

exports.createTutorProfilePostController = async(req, res, next) => {
    try {
        let getTutorInformation = await TutorServices.getTutorFromToken(req)
        let { name, email, bio, userProfilePic, links } = req.body
            // check is user profile exist in the collection ...
        let tProfile = await TutorProfile.findOne({ tutor: getTutorInformation._id })
        if (tProfile) {
            return res.status(500).json({ 'message': 'User profile already exist. Please update it.' })
        }
        const tutorProfile = new TutorProfile({
            tutor: getTutorInformation._id,
            name,
            email,
            bio,
            userProfilePic,
            links
        })
        console.log(tutorProfile)
        let createTutorProfile = await tutorProfile.save()
        console.log('Tutor created successfully ', createTutorProfile)
        res.status(200).json({ 'data': createTutorProfile })
    } catch (e) {
        console.log(e)
        next(e)
    }
}


exports.editTutorProfileGetController = async(req, res, next) => {
    try {
        let getTutorInfo = await TutorServices.getTutorFromToken(req)
        let tProfileInfo = await TutorProfile.findOne({ tutor: getTutorInfo._id })
        if (!tProfileInfo) {
            return res.status(500).json({
                'message': 'Profile does not exist.'
            })
        }
        console.log(tProfileInfo.email, tProfileInfo.name, tProfileInfo.userProfilePic)
        res.json({ 'data': tProfileInfo })
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.editTutorProfilePostController = async(req, res, next) => {
    try {
        let { name, email, bio, userProfilePic, links } = req.body
        let getTutorInfo = await TutorServices.getTutorFromToken(req)
        let tProfileInfo = await TutorProfile.findOne({ tutor: getTutorInfo._id })
        if (!tProfileInfo) {
            return res.status(500).json({
                'message': 'Profile does not exist.'
            })
        }

        let updatedProfileInfo = TutorProfile.findByIdAndUpdate(tProfileInfo._id, {
                name: name,
                email: email,
                bio: bio,
                userProfilePic: userProfilePic,
                links: links
            }, (error, data) => {
                if (error) return res.send(500, { error: error })
                return res.status(200).json({ 'data': data })
            })
            // res.status(200).json({ 'data': updatedProfileInfo })
    } catch (e) {
        console.log(e)
        next(e)
    }
}