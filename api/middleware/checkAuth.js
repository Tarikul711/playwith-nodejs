const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            if (token) {
                const decodedToken = jwt.verify(token, 'Tarikul711')
                req.userData = decodedToken
                next()
            } else {
                console.log('UnAuthorised user')
            }
        }
    } catch (e) {
        console.log(e)
        next(e)
    }
}