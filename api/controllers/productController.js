import { Product } from "../../models/Product.js";

// GET all products (ไม่ต้อง login)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ inStock: true }).sort("-createdAt");
    res.json({ error: false, products });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Failed to fetch products",
      details: err.message,
    });
  }
};

// GET product by ID (ไม่ต้อง login)
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ error: true, message: "Product not found" });
    }
    
    res.json({ error: false, product });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Failed to fetch product",
      details: err.message,
    });
  }
};

// Search products by name (สำหรับ SearchBar)
export const searchProducts = async (req, res) => {
  try {
    const { q } = req.query; // query string: /api/products/search?q=labubu
    
    if (!q || q.trim() === "") {
      return res.json({ error: false, products: [] });
    }
    
    const products = await Product.find({
      name: { $regex: q, $options: "i" }, // case-insensitive search
      inStock: true,
    }).limit(10); // จำกัดผลลัพธ์ 10 รายการ
    
    res.json({ error: false, products });
  } catch (err) {
    res.status(500).json({
      error: true,
      message: "Search failed",
      details: err.message,
    });
  }
};