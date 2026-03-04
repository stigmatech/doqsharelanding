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
    const { firstName, lastName, email, company, phone, message, preferredTime } = body;

    // Required fields validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
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

    // Email to sales team
    const salesEmail = await resend.emails.send({
      from: 'DoQshare Sales <sales@doqshare.com>',
      to: ['sales@doqshare.com'],
      subject: `New demo request - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New demo request</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Prospect information:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
            <p><strong>Preferred time:</strong> ${preferredTime || 'Not specified'}</p>
          </div>
          
          ${message ? `
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Prospect message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; font-size: 14px; color: #92400e;">
            <p style="margin: 0;"><strong>Action required:</strong> Contact the prospect within 24 hours to schedule the demo.</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p>Request date: ${new Date().toLocaleString('en-US')}</p>
            <p>Source: DoQshare website</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to prospect
    const confirmationEmail = await resend.emails.send({
      from: 'DoQshare Sales <sales@doqshare.com>',
      to: [email],
      subject: 'DoQshare Demo - Request Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 15px 25px; border-radius: 8px; font-weight: bold; font-size: 20px;">
              DoQshare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Thank you for your interest, ${firstName}!</h2>
          
          <p>We have received your demo request and our sales team will contact you within 24 hours to schedule your personalized session.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Request summary:</h3>
            <p><strong>Request date:</strong> ${new Date().toLocaleString('en-US')}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <p><strong>Preferred time:</strong> ${preferredTime || 'To be determined'}</p>
          </div>
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">What happens next?</h3>
            <ol style="color: #0369a1; line-height: 1.8;">
              <li>Our team will contact you within 24 hours</li>
              <li>We'll schedule a personalized demo (30-45 min)</li>
              <li>We'll present features tailored to your needs</li>
              <li>We'll answer all your questions</li>
            </ol>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Urgent questions? Contact us directly:<br>
              <a href="mailto:sales@doqshare.com" style="color: #2563eb;">sales@doqshare.com</a> | 
              <a href="tel:+15551234567" style="color: #2563eb;">+1 (555) 123-4567</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demo request sent successfully',
        salesEmailId: salesEmail.data?.id,
        confirmationEmailId: confirmationEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending demo request:', error);
    return NextResponse.json(
      { error: 'Error sending request. Please try again.' },
      { status: 500 }
    );
  }
}
