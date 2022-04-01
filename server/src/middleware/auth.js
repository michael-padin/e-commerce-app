import jwt from "jsonwebtoken";

// Very the token if it's correct or it has token
export const verifyToken = (req, res, next) => {

  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    
      if (err) res.status(403).json("Token is not valid!");
    
      req.user = user;
      next();

    });

  } else {
    
    return res.status(401).json("Your are not authenticated");

  }
};

// Verify if the user is authenticated
export const auth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that!");
    }
  });
};

// Verify if the user if Admin
export const authAndAdmin = (req, res, next) => {

  verifyToken(req, res, () => {

    if (req.user.isAdmin) {

      next();

    } else {

      return res.status(403).json("You are not allowed to do that!");

    }
  });
};


