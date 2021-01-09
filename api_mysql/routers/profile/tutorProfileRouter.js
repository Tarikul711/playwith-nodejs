const router = require('express').Router()

const checkAuth = require('../../middleware/checkAuth')

const {
    createTutorProfileGetController,
    createTutorProfilePostController,
    editTutorProfileGetController,
    editTutorProfilePostController
} = require('../../controllers/profile/tutorProfileController')

router.get('/', checkAuth, createTutorProfileGetController)
router.post('/', checkAuth, createTutorProfilePostController)
router.get('/edit', checkAuth, editTutorProfileGetController)
router.post('/edit', checkAuth, editTutorProfilePostController)

module.exports = router