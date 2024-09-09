import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB';

import authRoutes from './routes/auth.route';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port ', PORT);
});
