import { MailtrapClient } from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config({
  path: '../.env',
});

// const RECIPIENT_EMAIL = "leokhantzarni@gmail.com";

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN as string,
});

export const sender = {
  name: 'Mailtrap Test',
  email: 'mailtrap@demomailtrap.com',
};

// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from Mailtrap!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);
