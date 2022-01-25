const houses = require('./db.json')
let idCounter = 4

module.exports = {
    getHouses:(req, res) => {
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const { title, rating, imageURL} = req.body
        let newHouse = {
            id: idCounter, 
            address: address,
            price: price,
            imageUrl: imageUrl
        }
        house.push(newHouse)
        res.status(200).send(houses)
        idCounter++
    },

    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = house.findIndex(house => +house.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let{type}=req.body
        let index = houses.findIndex(houses => +houses.id === +id)
        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}