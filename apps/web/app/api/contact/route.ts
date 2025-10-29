import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, subject, message } = body;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Envoi de l'email à l'équipe
    const teamEmail = await resend.emails.send({
      from: 'DoqShare Contact <contact@doqshare.com>',
      to: ['hello@doqshare.com'],
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non spécifiée'}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site DoqShare.</p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
    });

    // Email de confirmation à l'utilisateur
    const confirmationEmail = await resend.emails.send({
      from: 'DoqShare <noreply@doqshare.com>',
      to: [email],
      subject: 'Merci pour votre message - DoqShare',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 18px;">
              DoqShare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Merci pour votre message, ${firstName} !</h2>
          
          <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Récapitulatif de votre message :</h3>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>
          
          <p>En attendant notre réponse, n'hésitez pas à :</p>
          <ul style="color: #64748b;">
            <li>Découvrir nos <a href="https://doqshare.com/features" style="color: #2563eb;">fonctionnalités</a></li>
            <li>Consulter nos <a href="https://doqshare.com/pricing" style="color: #2563eb;">tarifs</a></li>
            <li>Commencer un <a href="https://doqshare.com" style="color: #2563eb;">essai gratuit</a></li>
          </ul>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              L'équipe DoqShare<br>
              <a href="mailto:hello@doqshare.com" style="color: #2563eb;">hello@doqshare.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        teamEmailId: teamEmail.data?.id,
        confirmationEmailId: confirmationEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
