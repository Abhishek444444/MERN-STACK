const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract the token from the Authorization header

  if (!token) {
    return res.status(403).json({ message: "Access denied, token missing" });
  }

  try {
    // Verify the token and attach the decoded user information to the request
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store the decoded JWT payload in req.user
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Invalid token:", error);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateJWT;