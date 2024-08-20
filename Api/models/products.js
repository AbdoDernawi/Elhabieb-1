const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const SizeSchema = new mongoose.Schema({
  size: { type: String },
  colors: {
    type: [String],
  },
  stock: {
    type: [StockSchema],
  },
});

const ProductDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  priceMarkter: {
    type: Number,
    required: true,
    default: 0,
  },
  priceCustomer: {
    type: Number,
    required: true,
    default: 0,
  },
  colors: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  discrubtion: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  catogry: {
    type: String,
    default: "",
  },
  dateAdded: {
    type: String,
    default: "",
  },
  timeAdded: {
    type: String,
    default: "",
  },
  numberSelles: {
    type: Number,
    default: 0,
  },
  sizes: {
    type: [SizeSchema],
    required: true,
    default: [],
  },
});

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  priceMarkter: {
    type: Number,
    required: true,
    default: 0,
  },
  priceCustomer: {
    type: Number,
    required: true,
    default: 0,
  },
  colors: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  discrubtion: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  catogry: {
    type: String,
    default: "",
  },
  dateAdded: {
    type: String,
    default: "",
  },
  timeAdded: {
    type: String,
    default: "",
  },
  numberSelles: {
    type: Number,
    default: 0,
  },
  products: {
    type: [ProductDetailsSchema],
    default: [],
  },
  sizes: {
    type: [SizeSchema],
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
