require("dotenv").config();
const CryptoJS = require("crypto-js");
const Products = require("../models/products");

const keyHash = process.env.KEY_HASH;

exports.getProducts = async (req, res) => {
  try {
    const items = await Products.find();
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(items),
      keyHash
    ).toString();
    res.json({ data: encryptedData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const item = await Products.findById(req.params.id);
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(item),
      keyHash
    ).toString();
    res.json({ data: encryptedData });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addProduct = async (req, res) => {
  try {
    const { data: encryptedData } = req.body;

    // فك تشفير البيانات
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, keyHash);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const decryptedData = JSON.parse(decryptedText);


    const DataProducts = {
      name: decryptedData.name,
      price: decryptedData.price,
      priceMarkter: decryptedData.priceMarkter,
      priceCustomer: decryptedData.priceCustomer,
      colors: decryptedData.colors,
      images: decryptedData.images,
      discrubtion: decryptedData.discrubtion,
      active: decryptedData.active,
      catogry: decryptedData.catogry,
      dateAdded: decryptedData.dateAdded,
      timeAdded: decryptedData.timeAdded,
      numberSelles: decryptedData.numberSelles,
      sizes: decryptedData.sizes,
      products: decryptedData.products.map((item) => ({
        name: item.name,
        price: item.price,
        priceMarkter: item.priceMarkter,
        priceCustomer: item.priceCustomer,
        colors: item.colors,
        images: item.images,
        discrubtion: item.discrubtion,
        active: decryptedData.active,
        catogry: item.catogry,
        dateAdded: item.dateAdded,
        timeAdded: item.timeAdded,
        numberSelles: item.numberSelles,
        sizes: item.sizes,
      })),
    };

    // // التحقق من وجود منتج بنفس الاسم
    const existingProducts = await Products.findOne({
      name: DataProducts.name,
    });

    if (existingProducts) {
      return res.send("EXIT_SURE");
    }

    // حفظ المنتج الجديد
    const NewProducts = new Products(DataProducts);
    const save = await NewProducts.save();

    if (save) {
      return res.status(201).send("ADDED_SUSESS");
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { data: encryptedData } = req.body;

    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, keyHash);
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const decryptedData = JSON.parse(decryptedText);

    const { name } = decryptedData;

    const existingProductByName = await Products.findOne({ name });

    if (
      existingProductByName &&
      existingProductByName._id.toString() !== req.params.id
    ) {
      return res.status(200).send("Product_NAME_EXISTS");
    }

    const existingProduct = await Products.findById(req.params.id);

    if (!existingProduct) {
      return res.status(404).send("Product_NOT_FOUND");
    }
    existingProduct.name = decryptedData.name;
    existingProduct.price = decryptedData.price;
    existingProduct.priceMarkter = decryptedData.priceMarkter;
    existingProduct.priceCustomer = decryptedData.priceCustomer;
    existingProduct.colors = decryptedData.colors;
    existingProduct.images = decryptedData.images;
    existingProduct.discrubtion = decryptedData.discrubtion;
    existingProduct.active = decryptedData.active;
    existingProduct.catogry = decryptedData.catogry;
    existingProduct.dateAdded = decryptedData.dateAdded;
    existingProduct.timeAdded = decryptedData.timeAdded;
    existingProduct.numberSelles = decryptedData.numberSelles;
    existingProduct.sizes = decryptedData.sizes;
    existingProduct.products = decryptedData.products;

    const updatedProduct = await existingProduct.save();

    if (updatedProduct) {
      return res.status(200).send("EDIT_SUCCESS");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
