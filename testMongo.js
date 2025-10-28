import { connectMongo } from "./config/mongo.js"; 
import { User } from "./models/User.js";

const testConnection = async () => {
  await connectMongo();

  // สร้าง user ทดลอง
  const newUser = new User({
    firstname: "Test",
    lastname: "User",
    email: "test@example.com",
    phone: "0812345678",
    address: "Bangkok",
    username: "testuser",
    password: "123456",
  });

  await newUser.save(); // บันทึกลง MongoDB
  console.log("✅ New user saved!");

  process.exit(0);
};

testConnection();
