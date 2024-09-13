import { Request, Response } from 'express';
import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { generateVerificationCode } from '../utils/generateVerificationCode';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from '../mailtrap/emails';

import crypto from 'crypto';

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
    console.log('last login: ', user.lastLogin);
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

export const verifyEmail = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired verififcation code',
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined!; // non-null assertion operator
    user.verificationTokenExpiresAt = undefined!;
    await user.save();

    await sendWelcomeEmail(user.email.toString(), user.name.toString());
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in verifying email ', error);
      res.status(400).json({
        success: false,
        message: 'Invalid or expired verification code',
      });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log('email: ', email);
  console.log('password', password);
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials',
      });
    }
    const isPasswordValid = await bcryptjs.compare(
      password,
      user.password.toString()
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid credentials',
      });
    }
    generateTokenAndSetCookie(res, user._id);
    user.lastLogin = new Date();

    await user.save();
    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        ...user._doc,
        // ...user.toObject(), // figure why ._doc() generates an error but toObject() doesn't
        password: undefined,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in logging in ', error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found',
      });
    }
    // generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    // send email
    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    );
    res.status(200).json({
      success: true,
      message: 'Password reset link sent to your email',
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in forgot password');
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired reset token',
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendResetSuccessEmail(user.email);
    res.status(200).json({
      success: true,
      message: 'Password reset successful',
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error in resetPassword', error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};
