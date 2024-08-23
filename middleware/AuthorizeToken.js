const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const AuthorizeToken = asynchandler(async (req, res, next) => {
  let Token;
  let Authorization = req.headers.authorization;

  if (Authorization && Authorization.startsWith("Bearer")) {
    Token = Authorization.split(" ")[1];

    if (!Token) {
      res.status(401);
      throw new Error("Not Authorized, Token Failed");
    }

    try {
      const decoded = jwt.verify(Token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        res.status(401);
        throw new Error("Token Expired");
      } else {
        res.status(401);
        throw new Error("Invalid Token");
      }
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

module.exports = AuthorizeToken;
