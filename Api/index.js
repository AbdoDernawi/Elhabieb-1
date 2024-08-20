const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const categoryRoutes = require("./routes/categorey");
const productsRoutes = require("./routes/products");

app.use("/api/category", categoryRoutes);
app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
