import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️ RESEND_API_KEY is not configured. Email functionality will not work.');
}

export async function POST(request: NextRequest) {
  try {
    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, country, website, job, message } = body;

    // Required fields validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields must be filled' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to team
    const teamEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['marcovanexcel@gmail.com'],
      subject: `New contact message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Contact Message</h2>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <div style="margin: 16px 0; padding: 12px; background: #f8fafc; border-radius: 4px;">
              <p style="margin: 4px 0;"><strong>Country:</strong> ${country || 'N/A'}</p>
              <p style="margin: 4px 0;"><strong>Website:</strong> ${website || 'N/A'}</p>
              <p style="margin: 4px 0;"><strong>Job Function:</strong> ${job || 'N/A'}</p>
            </div>
            <div style="margin-top: 24px;">
              <h3 style="margin-bottom: 8px; font-size: 16px;">Message:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; background: #fff; padding: 16px; border: 1px solid #e2e8f0; border-radius: 4px;">${message}</p>
            </div>
          </div>
          <div style="background: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
            Sent from DoQshare Contact Form • ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    });

    // Confirmation email to user (disabled for external testing until domain is verified)
    /*
    const confirmationEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Thank you for your message - DoQshare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 18px;">
              DoQshare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Thank you for your message, ${firstName}!</h2>
          
          <p>We have received your message and will respond as soon as possible.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Message summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('en-US')}</p>
          </div>
          
          <p>While you wait for our response, feel free to:</p>
          <ul style="color: #64748b;">
            <li>Discover our <a href="https://doqshare.com/features" style="color: #2563eb;">features</a></li>
            <li>Check our <a href="https://doqshare.com/pricing" style="color: #2563eb;">pricing</a></li>
            <li>Start a <a href="https://doqshare.com" style="color: #2563eb;">free trial</a></li>
          </ul>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              The DoQshare Team<br>
              <a href="mailto:hello@doqshare.com" style="color: #2563eb;">hello@doqshare.com</a>
            </p>
          </div>
        </div>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully (Test Mode)',
        teamEmailId: teamEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending message. Please try again.' },
      { status: 500 }
    );
  }
}
