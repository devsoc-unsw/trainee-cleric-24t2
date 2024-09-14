import jwt from 'jsonwebtoken';
import { Response } from 'express';
import mongoose from 'mongoose';

export const generateTokenAndSetCookie = (
  res: Response,
  userId: mongoose.Types.ObjectId
): string => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
