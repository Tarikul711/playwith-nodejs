const Tutor = require('../../models/tutor/tutorModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signinGetController = (req, res, next) => {
    res.json({
        "message": "signin get controller"
    })
}

exports.signinPostController = async(req, res, next) => {
    try {
        let { phoneNumber, password } = req.body
        let tutor = await Tutor.findOne({
            phoneNumber
        })
        if (!tutor) {
            return res.json({
                'message': 'Invalid user phone number'
            })
        }
        let matchPassword = await bcrypt.compare(password, tutor.password)
        if (!matchPassword) {
            return res.json({ 'message': 'Invalid user phone number or password' })
        }
        const token = jwt.sign({
                phoneNumber: tutor.phoneNumber
            },
            'TARIKUL711'
        )
        res.status(200).json({
            'data': tutor,
            'token': token
        })

    } catch (e) {
        console.log(e)
        next(e)
    }
}

// exports.signupGetController = (req, res, next) => {
//     res.json({
//         "message": "signin get controller"
//     })
// }

exports.signupPostController = async(req, res, next) => {
    try {
        let { phoneNumber, password } = req.body
        let hashedPassword = await bcrypt.hash(password, 11)
        let tutor = new Tutor({
            phoneNumber,
            password: hashedPassword
        })
        console.log(tutor)
        let createTutor = await tutor.save()
        console.log('Tutor created successfully ', createTutor)
        res.status(200).json(createTutor)
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.signoutController = (req, res, next) => {
    res.json({
        "message": "signin get controller"
    })
}