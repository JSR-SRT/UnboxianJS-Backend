import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "../models/Product.js";
import { ProductItems } from "../data/ProductData.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // ลบข้อมูลเก่า
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // เพิ่มข้อมูลใหม่
    await Product.insertMany(ProductItems);
    console.log(`✅ Seeded ${ProductItems.length} products`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();