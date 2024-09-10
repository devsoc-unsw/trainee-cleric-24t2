import mongoose, { Document, Schema, Types } from 'mongoose';

export interface UserDocument extends Document {
  email: {
    type: String;
    required: Boolean;
  };
  name: {
    type: String;
    required: Boolean;
  };
  password: {
    type: String;
    required: Boolean;
  };
  lastLogin: {
    type: Date;
    default: Date;
  };
  isVerified: {
    type: Boolean;
    default: Boolean;
  };
  resetPasswordToken: String;
  resetPasswordExpiresAt: Date;
  verificationToken: String;
  verificationTokenExpiresAt: Date;
  _id: Types.ObjectId; // i dont know why hthis fixed it
}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpiresAt: {
      type: Date,
    },
    verificationToken: {
      type: String,
    },
    verificationTokenExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>('User', userSchema);