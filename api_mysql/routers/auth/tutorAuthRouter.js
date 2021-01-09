const router = require('express').Router()

const {
    signinGetController,
    signinPostController,
    signupPostController,
    signoutController
} = require('../../controllers/auth/tutorAuthController')

router.get('/signin', signinGetController)
router.post('/signin', signinPostController)
router.post('/signup', signupPostController)
router.post('/signout', signoutController)

module.exports = router