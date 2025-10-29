import { Order } from "../../models/Order.js";

// สร้าง Order ใหม่ (ต้อง login)
export const createOrder = async (req, res) => {
  try {
    const { customer, cart, subtotal, shipping, total, id } = req.body;
    const userId = req.user._id;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: true, message: "Cart is empty" });
    }

    // สร้าง Order
    const order = new Order({
      orderNumber: id, // ใช้ id ที่ Frontend generate มา
      user: userId,
      customerInfo: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        phoneNumber: customer.phone,
        email: customer.email,
      },
      basketItems: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: Number(item.price),
        quantity: item.qty,
        mainImage: item.mainImage, // ✅ เก็บ mainImage เพื่อแสดงใน My Orders
      })),
      shippingAddress: customer.deliveryAddress,
      paymentMethod: customer.paymentMethod,
      subtotal,
      deliveryFee: shipping,
      total,
      status: "Preparing", // default status
    });

    await order.save();

    res.status(201).json({
      error: false,
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ error: true, message: error.message });
  }
};

// ดู Orders ทั้งหมดของ user ที่ login (ต้อง login)
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    const orders = await Order.find({ user: userId })
      .populate("basketItems.productId")
      .sort({ createdAt: -1 }); // เรียงใหม่สุดก่อน

    res.json({ error: false, orders });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// ดู Order เฉพาะรายการ (ต้อง login)
export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({ _id: id, user: userId }).populate(
      "basketItems.productId"
    );

    if (!order) {
      return res.status(404).json({ error: true, message: "Order not found" });
    }

    res.json({ error: false, order });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

// ยกเลิก Order (ต้อง login, เฉพาะ status Preparing เท่านั้น)
export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({ _id: id, user: userId });

    if (!order) {
      return res.status(404).json({ error: true, message: "Order not found" });
    }

    if (order.status !== "Preparing") {
      return res.status(400).json({
        error: true,
        message: "Cannot cancel order that is already being processed",
      });
    }

    await Order.findByIdAndDelete(id);

    res.json({
      error: false,
      message: "Order cancelled successfully",
    });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};