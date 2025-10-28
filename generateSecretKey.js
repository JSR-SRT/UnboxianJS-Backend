import { randomBytes } from "crypto";

console.log("🔑 JWT_SECRET:");
console.log(randomBytes(64).toString("hex"));
console.log("\n🔑 JWT_REFRESH_SECRET:");
console.log(randomBytes(64).toString("hex"));