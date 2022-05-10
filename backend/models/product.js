const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  personID:  String,
  personPassport: String,
  nationality: Boolean,
  email: String
}, { timestamps: true, versionKey: false })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
