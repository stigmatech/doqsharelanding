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
    const { email, source = 'website' } = body;

    // Email validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email address required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Welcome email for newsletter
    const welcomeEmail = await resend.emails.send({
      from: 'DoQshare Newsletter <newsletter@doqshare.com>',
      to: [email],
      subject: 'Welcome to DoQshare Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 15px 25px; border-radius: 8px; font-weight: bold; font-size: 20px;">
              DoQshare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Welcome to our community!</h2>
          
          <p>Thank you for subscribing to the DoQshare newsletter. You will now receive:</p>
          
          <ul style="color: #64748b; line-height: 1.8;">
            <li>📧 Latest news on document security</li>
            <li>🔒 GDPR/HIPAA tips and best practices</li>
            <li>🚀 New DoQshare features</li>
            <li>💡 Use cases and customer testimonials</li>
            <li>🎯 Exclusive offers and promotions</li>
          </ul>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #1e293b; margin-top: 0;">In the meantime, discover:</h3>
            <p style="margin-bottom: 15px;">Start your free trial now</p>
            <a href="https://doqshare.com" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Start Free Trial
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              You can unsubscribe at any time by clicking the link at the bottom of our emails.<br>
              The DoQshare Team
            </p>
          </div>
        </div>
      `,
    });

    // Team notification
    const teamNotification = await resend.emails.send({
      from: 'DoQshare Newsletter <newsletter@doqshare.com>',
      to: ['hello@doqshare.com'],
      subject: 'New newsletter subscriber',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New newsletter subscriber</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('en-US')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Newsletter subscription successful',
        welcomeEmailId: welcomeEmail.data?.id,
        teamNotificationId: teamNotification.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json(
      { error: 'Error subscribing. Please try again.' },
      { status: 500 }
    );
  }
}
