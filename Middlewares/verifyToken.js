import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Problem aa raha hai" });
  }

  try {
    const decoded = jwt.verify(token, process.env.secret_key);
    req.id = decoded.id;
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
