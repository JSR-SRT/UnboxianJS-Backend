import { Schema, model, mongoose } from "mongoose";

const OrderSchema = new Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    
    customerInfo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      email: { type: String, required: true },
    },

    basketItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, min: 1 },
        mainImage: { type: String }, // mainImage เพื่อแสดงในหน้า My Orders
      },
    ],

    shippingAddress: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ["card", "bank"], //
      required: true,
    },
    
    subtotal: { type: Number, required: true },
    deliveryFee: { type: Number, default: 50 }, // ค่าส่ง 50 บาท
    total: { type: Number, required: true },
    
    status: {
      type: String,
      enum: ["Preparing", "Processing", "Shipped", "Delivered"], // OrderStatusTracker
      default: "Preparing",
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model("Order", OrderSchema);