import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["bearbrick", "popmart"],
      required: true,
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }, // เก็บเป็น String เหมือน Frontend
    condition: {
      type: String,
      enum: ["New", "New-Unboxed", "Displayed, Like New"],
      required: true,
    },
    mainImage: { type: String, required: true }, // Cloudinary URL
    gallery: [{ type: String }], // Array of Cloudinary URLs
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);