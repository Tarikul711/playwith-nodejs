const router = require('express').Router()

const checkAuth = require('../../middleware/checkAuth')

const {
    tutorPostGetController,
    tutorPostPostController
} = require('../../controllers/tutorPost/tutorPostController')


router.get('/tutor-post', tutorPostGetController)
router.post('/tutor-post', tutorPostPostController)

module.exports = router