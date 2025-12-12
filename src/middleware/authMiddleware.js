import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if(!token) return res.status(401).json({message:"Not Authorized"})
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
   req.user=decoded;
   next();  
}catch(error){
    res.status(401).json({message:"Invalid Token"})
}
};

export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only" });
  }
  next();
};
