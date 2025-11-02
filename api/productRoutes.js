import express from "express";
import {
  getAllProducts,
  getProductById,
  searchProducts,
} from "./controllers/productController.js";

const router = express.Router();

// Search products (public) - ใช้สำหรับ SearchBar
router.get("/search", searchProducts);

// GET all products (public)
router.get("/", getAllProducts);

// GET product by ID (public)
router.get("/:id", getProductById);

export default router;