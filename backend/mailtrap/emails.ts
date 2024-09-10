import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates';
import { mailTrapClient, sender } from './mailtrap.config';

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationToken
      ),
      category: 'Email Verification',
    });
    console.log('Email sent successfully', response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Erorr sending verification email: ${error}`);
  }
};
