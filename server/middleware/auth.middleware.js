const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_ACCESS_TOKEN;

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Oczekiwany format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "Brak tokenu uwierzytelniającego.",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Przechowaj dane użytkownika w req
    next();
  } catch (error) {
    return res.status(403).json({
      status: "failed",
      message: "Nieprawidłowy lub wygasły token.",
    });
  }
};

module.exports = authenticate;
