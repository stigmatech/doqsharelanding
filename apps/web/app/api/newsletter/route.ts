import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'website' } = body;

    // Validation de l'email
    if (!email) {
      return NextResponse.json(
        { error: 'Adresse email requise' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Email de bienvenue pour la newsletter
    const welcomeEmail = await resend.emails.send({
      from: 'DoqShare Newsletter <newsletter@doqshare.com>',
      to: [email],
      subject: 'Bienvenue dans la newsletter DoqShare !',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 15px 25px; border-radius: 8px; font-weight: bold; font-size: 20px;">
              DoqShare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Bienvenue dans notre communauté !</h2>
          
          <p>Merci de vous être abonné à la newsletter DoqShare. Vous recevrez désormais :</p>
          
          <ul style="color: #64748b; line-height: 1.8;">
            <li>📧 Les dernières actualités sur la sécurité documentaire</li>
            <li>🔒 Des conseils et bonnes pratiques GDPR/HIPAA</li>
            <li>🚀 Les nouvelles fonctionnalités de DoqShare</li>
            <li>💡 Des cas d'usage et témoignages clients</li>
            <li>🎯 Des offres exclusives et promotions</li>
          </ul>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #1e293b; margin-top: 0;">En attendant, découvrez :</h3>
            <p style="margin-bottom: 15px;">Commencez votre essai gratuit dès maintenant</p>
            <a href="https://doqshare.com" style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Commencer l'essai gratuit
            </a>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Vous pouvez vous désabonner à tout moment en cliquant sur le lien en bas de nos emails.<br>
              L'équipe DoqShare
            </p>
          </div>
        </div>
      `,
    });

    // Notification à l'équipe
    const teamNotification = await resend.emails.send({
      from: 'DoqShare Newsletter <newsletter@doqshare.com>',
      to: ['hello@doqshare.com'],
      subject: 'Nouvel abonné à la newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvel abonné à la newsletter</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Inscription à la newsletter réussie',
        welcomeEmailId: welcomeEmail.data?.id,
        teamNotificationId: teamNotification.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
