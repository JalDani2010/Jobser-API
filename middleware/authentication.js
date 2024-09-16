const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentificationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, "B7581C57EDAF11AACCDDD4DA329FD");

    const user = User.findById(payload.userId).select("-password");
    req.user = user;

    req.user = { userId: payload.userId, name: payload.name };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = authentificationMiddleware;
