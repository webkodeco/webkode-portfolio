export const prerender = false;

/**
 * API route para Astro desplegado en Cloudflare (Pages/Workers) usando JavaScript.
 * Lee las variables desde el runtime: context.locals.runtime.env
 * Asegúrate de definir RESEND_API_KEY y WEBKODE_EMAIL_DIRECTION en Cloudflare -> Settings -> Environment variables
 */
export async function POST(context) {
  try {
    const { request, locals } = context;

    const {
      customerName,
      customerEmail,
      customerCountry,
      customerPhone,
      message,
    } = await request.json();

    // Variables de entorno desde el runtime de Cloudflare
    const env = (locals && locals.runtime && locals.runtime.env) ? locals.runtime.env : {};

    const RESEND_API_KEY = (env.RESEND_API_KEY || '').trim(); // Debe iniciar con re_
    const FROM_TO = (env.WEBKODE_EMAIL_DIRECTION || '').trim(); // Remitente/dominio verificado en Resend

    // Validaciones
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({
        success: false,
        error: 'RESEND_API_KEY is missing (Cloudflare runtime env).'
      }), { status: 500 });
    }
    if (!RESEND_API_KEY.startsWith('re_')) {
      return new Response(JSON.stringify({
        success: false,
        error: 'RESEND_API_KEY format is wrong (should start with "re_").'
      }), { status: 500 });
    }
    if (!FROM_TO) {
      return new Response(JSON.stringify({
        success: false,
        error: 'WEBKODE_EMAIL_DIRECTION is missing (Cloudflare runtime env).'
      }), { status: 500 });
    }

    // Llamada a Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_TO, // Ej: 'Soporte <soporte@tudominio.com>'
        to: FROM_TO,
        subject: `Quiero contactarte 🚀 - ${customerName}`,
        html: `
          <p><strong>Nombre:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>País:</strong> ${customerCountry || 'No especificado'}</p>
          <p><strong>Teléfono:</strong> ${customerPhone || 'No especificado'}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      }),
    });

    const text = await res.text();
    if (!res.ok) {
      return new Response(JSON.stringify({
        success: false,
        status: res.status,
        resend_error: text,
      }), { status: res.status });
    }

    return new Response(JSON.stringify({ success: true, data: JSON.parse(text) }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error && error.message }), { status: 500 });
  }
}
