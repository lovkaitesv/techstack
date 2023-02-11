module.exports = function (req, res, next) {
    const {rooms, name, price} = req.body
    let check = req.body.description ? req.body.description.length : null
    if(
        parseInt(rooms) > 0 &&
        name.length > 0 &&
        name.length < 99 &&
        parseInt(price) > 0) {
        if (check && check < 999) {
            next()
        } else if (check && check > 999) {
            res.status(400).json({message: "Description can't be longer then 999 symbols"})
        } else {
            next()
        }

    } else {
        res.status(400).json({message: "Invalid body"})
    }
}