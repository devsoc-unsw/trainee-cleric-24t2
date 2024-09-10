import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";

dotenv.config({
  path: "../.env"
})

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = process.env.MAILTRAP_TOKEN;
// console.log("TOKEN: ", TOKEN);
const SENDER_EMAIL = "mailtrap@demomailtrap.com";
const RECIPIENT_EMAIL = "leokhantzarni@gmail.com";

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to Mailtrap Sending!",
  })
  .then(console.log)
  .catch(console.error);