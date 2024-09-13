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

export const sendWelcomeEmail = async (email: string, name: string) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: '86874fe5-a4a1-4c9b-8183-6348eb4338e8',
      template_variables: {
        company_info_name: 'Bloom',
        name: name,
      },
    });
    console.log('Welcome Email sent successfully', response);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error sending welcome email', error);
      throw new Error(`Error sending welcome email: ${error}`);
    }
  }
};
