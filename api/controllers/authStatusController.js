import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";

export const getAuthStatus = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  console.log("Auth Status Check:", {
    hasCookie: !!accessToken,
    cookies: Object.keys(req.cookies),
  });

  if (!accessToken) {
    return res.status(200).json({ isLoggedIn: false, user: null });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      const isProd = process.env.NODE_ENV === "production";
      res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      });
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
      });
      return res.status(200).json({ isLoggedIn: false, user: null });
    }

    return res.status(200).json({
      isLoggedIn: true,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        shippingAddress: user.shippingAddress,
      },
    });
  } catch (error) {
    console.error("Authentication status check failed:", error);
    const isProd = process.env.NODE_ENV === "production";
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(200).json({ isLoggedIn: false, user: null });
  }
};
