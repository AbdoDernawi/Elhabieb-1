const mongoose = require("mongoose");
const Product = require("./models/products"); 
const connectDB = require("./config/db");

const deleteData = async () => {
  try {
    await connectDB(); 
    await Product.deleteMany({}); 
    console.log("-ˏˋ⋆ S U C S S E S ⋆ˊˎ-");
    process.exit();
  } catch (err) {
    console.error("Failed to delete data", err);
    process.exit(1);
  }
};

deleteData();
