import { Request, Response } from 'express';
import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { generateVerificationCode } from '../utils/generateVerificationCode';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import { sendVerificationEmail } from '../mailtrap/emails';

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error('All fields are required');
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = generateVerificationCode();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email.toString(), verificationToken);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  res.send('login route');
};

export const logout = async (req: Request, res: Response) => {
  res.send('logout route');
};
