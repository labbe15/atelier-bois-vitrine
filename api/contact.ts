import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message }: ContactRequest = req.body;

    // Input validation
    if (!name || name.trim().length === 0 || name.length > 100) {
      return res.status(400).json({ error: 'Invalid name' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return res.status(400).json({ error: 'Invalid email' });
    }
    if (!message || message.trim().length === 0 || message.length > 5000) {
      return res.status(400).json({ error: 'Invalid message' });
    }
    if (phone && phone.length > 20) {
      return res.status(400).json({ error: 'Invalid phone' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "L'Atelier du Volcan <onboarding@resend.dev>",
        to: ["contact@atelier-du-volcan.com"],
        reply_to: email,
        subject: `Nouveau message de ${name}`,
        html: `
          <h2>Nouveau message depuis le site</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    const result = await resendResponse.json();
    console.log('Email sent successfully:', result.id);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Error in contact handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
