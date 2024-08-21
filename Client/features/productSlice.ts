import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

interface Product {
  _id: string;
  name: string;
  price: number;
  priceMarkter: number;
  priceCustomer: number;
  colors: string[];
  images: string[];
  discrubtion: string;
  active: boolean;
  catogry: string;
  dateAdded: string;
  timeAdded: string;
  numberSales: number;
  sizes: {
    size: string;
    colors: string[];
    stock: {
      city: string;
      store: string;
      amount: number;
    }[];
  }[];
  properties: string[];
  products: {
    properties: string[];
    name: string;
    price: number;
    priceMarkter: number;
    priceCustomer: number;
    colors: string[];
    images: string[];
    discrubtion: string;
    active: boolean;
    catogry: string;
    dateAdded: string;
    timeAdded: string;
    numberSales: number;
    sizes: {
      size: string;
      colors: string[];
      stock: {
        city: string;
        store: string;
        amount: number;
      }[];
    }[];
  }[];
}
interface ProductState {
  products: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const keyHash = process.env.NEXT_PUBLIC_KEY_HASH;
const apiEndpoint = process.env.NEXT_PUBLIC_LINK_API;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${apiEndpoint}products`);
      const encryptedData = response.data.data;
      if (!keyHash) {
        throw new Error("Encryption key is missing");
      }
      const bytes = CryptoJS.AES.decrypt(encryptedData, keyHash);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (error) {
      throw new Error(`Failed to fetch and decrypt products: ${error}`);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (slug: string) => {
    try {
      const response = await axios.get(`${apiEndpoint}products/${slug}`);
      const encryptedData = response.data.data;

      if (!keyHash) {
        throw new Error("Encryption key is missing");
      }

      const bytes = CryptoJS.AES.decrypt(encryptedData, keyHash);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decryptedData);
      return decryptedData;
    } catch (error) {
      throw new Error(`Failed to fetch and decrypt product: ${error}`);
    }
  }
);

const productSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetchCategories
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch categories";
        state.loading = false;
      })

      // Handling fetchCategoryById
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch category";
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
