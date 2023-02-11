const Router = require('express')
const apartmentController = require('../controllers/apartmentController')
const validationMiddleware = require('../middlewares/validationMiddleware')

const router = new Router()

router.get('/apartments', apartmentController.getAll)
router.get('/apartments/:id', apartmentController.getOne)
router.post('/apartments', validationMiddleware, apartmentController.create)
router.put('/apartments/:id', validationMiddleware, apartmentController.update)
router.delete('/apartments/:id', apartmentController.delete)

module.exports = router