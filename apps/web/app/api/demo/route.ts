import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, phone, message, preferredTime } = body;

    // Validation des champs requis
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Les champs nom, prénom et email sont requis' },
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

    // Email à l'équipe de vente
    const salesEmail = await resend.emails.send({
      from: 'DoqShare Sales <sales@doqshare.com>',
      to: ['sales@doqshare.com'],
      subject: `Nouvelle demande de démonstration - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle demande de démonstration</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Informations du prospect :</h3>
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non spécifiée'}</p>
            <p><strong>Téléphone:</strong> ${phone || 'Non spécifié'}</p>
            <p><strong>Créneau préféré:</strong> ${preferredTime || 'Non spécifié'}</p>
          </div>
          
          ${message ? `
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message du prospect :</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; font-size: 14px; color: #92400e;">
            <p style="margin: 0;"><strong>Action requise :</strong> Contacter le prospect dans les 24h pour planifier la démonstration.</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-radius: 8px; font-size: 14px; color: #64748b;">
            <p>Date de la demande: ${new Date().toLocaleString('fr-FR')}</p>
            <p>Source: Site web DoqShare</p>
          </div>
        </div>
      `,
    });

    // Email de confirmation au prospect
    const confirmationEmail = await resend.emails.send({
      from: 'DoqShare Sales <sales@doqshare.com>',
      to: [email],
      subject: 'Démonstration DoqShare - Confirmation de votre demande',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background: #2563eb; color: white; padding: 15px 25px; border-radius: 8px; font-weight: bold; font-size: 20px;">
              DoqShare
            </div>
          </div>
          
          <h2 style="color: #1e293b;">Merci pour votre intérêt, ${firstName} !</h2>
          
          <p>Nous avons bien reçu votre demande de démonstration et notre équipe commerciale vous contactera dans les 24 heures pour planifier votre session personnalisée.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Récapitulatif de votre demande :</h3>
            <p><strong>Date de la demande:</strong> ${new Date().toLocaleString('fr-FR')}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non spécifiée'}</p>
            <p><strong>Créneau préféré:</strong> ${preferredTime || 'À convenir'}</p>
          </div>
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">Que va-t-il se passer ensuite ?</h3>
            <ol style="color: #0369a1; line-height: 1.8;">
              <li>Notre équipe vous contactera dans les 24h</li>
              <li>Nous planifierons une démonstration personnalisée (30-45 min)</li>
              <li>Nous vous présenterons les fonctionnalités adaptées à vos besoins</li>
              <li>Nous répondrons à toutes vos questions</li>
            </ol>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Questions urgentes ? Contactez-nous directement :<br>
              <a href="mailto:sales@doqshare.com" style="color: #2563eb;">sales@doqshare.com</a> | 
              <a href="tel:+33123456789" style="color: #2563eb;">+33 1 23 45 67 89</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demande de démonstration envoyée avec succès',
        salesEmailId: salesEmail.data?.id,
        confirmationEmailId: confirmationEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la demande de démonstration:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
