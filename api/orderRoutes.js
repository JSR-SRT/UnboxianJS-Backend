import express from "express";
import {
  createOrder,
  getUserOrders,
  getOrderById,
  cancelOrder,
} from "./controllers/ordersController.js";
import { authUser } from "../middleware/auth.js";

const router = express.Router();

// สร้าง Order (ต้อง login)
router.post("/", authUser, createOrder);

// ดู Orders ทั้งหมดของ user (ต้อง login)
router.get("/", authUser, getUserOrders);

// ดู Order เฉพาะรายการ (ต้อง login)
router.get("/:id", authUser, getOrderById);

// ยกเลิก Order (ต้อง login)
router.delete("/:id", authUser, cancelOrder);

export default router;