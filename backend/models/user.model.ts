import mongoose, { Schema } from 'mongoose';

export interface UserDocument extends mongoose.Document {
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
  vertificationTokenExpiresAt: Date;
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
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    vertificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export interface UserModel extends mongoose.Model<UserDocument> {}
export default mongoose.model<UserDocument, UserModel>('User', userSchema);
