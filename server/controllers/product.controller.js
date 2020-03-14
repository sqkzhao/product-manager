const { Product } = require('../models/product.model')  // ???

module.exports.index = (req, res) => {
    res.json({ msg: "hello" })
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    const { title, price, description } = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts =>  res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true} )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}