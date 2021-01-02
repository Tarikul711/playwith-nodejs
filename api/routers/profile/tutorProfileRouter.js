const router = require('express').Router()

const checkAuth = require('../../middleware/checkAuth')

const {
    createTutorProfileGetController,
    createTutorProfilePostController,
    editTutorProfileGetController,
    editTutorProfilePostController
} = require('../../controllers/profile/tutorProfileController')

router.get('/', checkAuth, createTutorProfileGetController)
router.post('/', createTutorProfilePostController)
router.get('/edit', editTutorProfileGetController)
router.post('/edit', editTutorProfilePostController)

module.exports = router