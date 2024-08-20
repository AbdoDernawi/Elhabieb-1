const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = 5000 || process.env.PORT;
const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

const categoryRoutes = require("./routes/categorey");
const productsRoutes = require("./routes/products");

app.use("/category", categoryRoutes);
app.use("/products", productsRoutes);
app.get("/", function (req, res) {
    res.send("-ˏˋ⋆ ᴡ ᴇ ʟ ᴄ ᴏ ᴍ ᴇ ⋆ˊˎ-");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
