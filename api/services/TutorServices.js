const mongoose = require('mongoose')
const Tutor = require('../models/tutor/tutorModel')
const jwt = require('jsonwebtoken')


exports.getTutorFromToken() = async(req) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            if (token) {
                const decodedToken = jwt.verify(token, 'TARIKUL711')
                let phoneNumber = decodedToken.phoneNumber
                let tutor = await Tutor.findOne({ phoneNumber })
                if (!tutor) {
                    return "User not found"
                }
                return tutor
            } else {
                console.log('UnAuthorised user')
            }
        }
    } catch (e) {
        console.log(e)
        next(e)
    }
}