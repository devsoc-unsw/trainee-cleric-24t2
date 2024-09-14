import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  console.log('token is:', token);
  if (!token)
    return res.status(401).json({
      success: false,
      message: 'Unauthorized - no token provided',
    });
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    console.log('decoded: ', decoded);
    if (!decoded)
      return res.status(401).json({
        success: false,
        message: 'Unauthorized - invalid token',
      });
    req.userId = decoded.userId;
    console.log('req.userId: ', req.userId);
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in verifying token', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  }
};
