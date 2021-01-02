const router = require('express').Router()

const {
    createTutorProfileGetController,
    createTutorProfilePostController,
    editTutorProfileGetController,
    editTutorProfilePostController
} = require('../../controllers/profile/tutorProfileController')



router.get('/profile', createTutorProfileGetController)
router.post('/profile', createTutorProfilePostController)
router.get('/edit-profile', editTutorProfileGetController)
router.post('/edit-profile', editTutorProfilePostController)