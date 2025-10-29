# Configuration des Services Email

## Vue d'ensemble

Ce document explique comment configurer les services email pour DoqShare.

## Services supportés

### 1. Resend (Recommandé)
- **Avantage** : Simple, moderne, bon pour les startups
- **Prix** : Gratuit jusqu'à 3,000 emails/mois
- **Configuration** : Clé API uniquement

### 2. EmailJS (Alternative)
- **Avantage** : Fonctionne côté client, pas de backend
- **Prix** : Gratuit jusqu'à 200 emails/mois
- **Configuration** : Service ID + Template ID

### 3. SendGrid (Enterprise)
- **Avantage** : Très robuste, analytics avancés
- **Prix** : Payant à partir de 100 emails/mois
- **Configuration** : Clé API + configuration avancée

## Configuration Resend (Recommandé)

### 1. Créer un compte Resend
1. Allez sur [resend.com](https://resend.com)
2. Créez un compte
3. Vérifiez votre domaine (optionnel mais recommandé)

### 2. Variables d'environnement
```env
RESEND_API_KEY=re_xxxxxxxxxx
```

### 3. Configuration du domaine
- Ajoutez votre domaine dans Resend
- Configurez les enregistrements DNS
- Vérifiez le domaine

## Configuration EmailJS (Alternative)

### 1. Créer un compte EmailJS
1. Allez sur [emailjs.com](https://emailjs.com)
2. Créez un compte
3. Créez un service email (Gmail, Outlook, etc.)

### 2. Créer les templates
- Template Contact
- Template Newsletter  
- Template Demo

### 3. Variables d'environnement
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=template_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_NEWSLETTER=template_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_DEMO=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxx
```

## Formulaires disponibles

### 1. Formulaire de Contact
- **Endpoint** : `/api/contact`
- **Champs** : Prénom, Nom, Email, Entreprise, Sujet, Message
- **Emails** : Confirmation utilisateur + Notification équipe

### 2. Newsletter
- **Endpoint** : `/api/newsletter`
- **Champs** : Email, Source
- **Emails** : Email de bienvenue + Notification équipe

### 3. Demande de Démonstration
- **Endpoint** : `/api/demo`
- **Champs** : Prénom, Nom, Email, Entreprise, Téléphone, Message, Créneau
- **Emails** : Confirmation utilisateur + Notification équipe vente

## Test et Débogage

### 1. Mode développement
- Les emails sont loggés dans la console
- Utilisez des emails de test

### 2. Vérification des emails
- Vérifiez les dossiers spam
- Testez avec différents fournisseurs email

### 3. Monitoring
- Surveillez les taux de délivrabilité
- Configurez les webhooks si nécessaire

## Bonnes pratiques

1. **Validation** : Validez tous les champs côté client et serveur
2. **Rate limiting** : Implémentez des limites de taux
3. **Templates** : Utilisez des templates professionnels
4. **Testing** : Testez avec différents navigateurs et appareils
5. **Monitoring** : Surveillez les erreurs et performances
