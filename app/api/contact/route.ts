import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check environment variable
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain later
      to: 'nanofluencermedia@gmail.com',
      replyTo: email,
      subject: `[NanoFluencer] ${subject} - from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          </div>
          <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Subject:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px; border: 1px solid #e5e7eb;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
            This email was sent from the NanoFluencer contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('Email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
