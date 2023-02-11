const { apartments } = require('../models')

class ApartmentController {
    async create(req, res, next) {
        try {
            const {rooms, name, price, description} = req.body

            const apartment = await apartments.create({
                rooms,
                name,
                price,
                description
            })
            return res.json(apartment)
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            let {price, rooms} = req.query
            rooms = parseInt(rooms)
            let allApartments
            if ((price === 'asc' || price === 'desc') && !isNaN(rooms)) {
                allApartments = await apartments.findAll({
                    where: {rooms},
                    order: [
                        ['price', price.toUpperCase()]
                    ]
                })
            } else if ((price === 'asc' || price === 'desc') && isNaN(rooms)) {
                allApartments = await apartments.findAll({
                    order: [
                        ['price', price.toUpperCase()]
                    ]
                })
            } else if (!isNaN(rooms)) {
                allApartments = await apartments.findAll({
                    where: {rooms}
                })
            } else {
                allApartments = await apartments.findAll()
            }
            return res.json(allApartments)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            const apartment = await apartments.findOne({where: {id}})
            return res.json(apartment)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {rooms, name, price, description} = req.body
            const {id} = req.params
            const apartment = await apartments.update({
                rooms: rooms,
                name: name,
                price: price,
                description: description
            }, {where: {id}})
            return res.json(apartment)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params
            const apartment = await apartments.destroy({where: {id}})
            return res.json(apartment)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ApartmentController()