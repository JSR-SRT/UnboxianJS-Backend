import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";

export const getAuthStatus = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(200).json({ isLoggedIn: false, user: null });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");
      return res.status(200).json({ isLoggedIn: false, user: null });
    }

    return res.status(200).json({
      isLoggedIn: true,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  } catch (error) {
    console.error("Authentication status check failed:", error);
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return res.status(200).json({ isLoggedIn: false, user: null });
  }
};