const router = require('express').Router()

const checkAuth = require('../../middleware/checkAuth')

const {
    tutorPostGetController,
    tutorPostPostController
} = require('../../controllers/tutorPost/tutorPostController')


router.get('/tutor-post', checkAuth, tutorPostGetController)
router.post('/tutor-post', checkAuth, tutorPostPostController)

module.exports = router