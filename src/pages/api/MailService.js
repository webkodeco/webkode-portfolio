export const prerender = false;


export const POST = async ({ request }) => {
  try {
    const {
      customerName,
      customerEmail,
      customerCountry,
      customerPhone,
      message,
    } = await request.json();

    // 1) Lee y sanea las envs
    const RESEND_API_KEY = (import.meta.env.RESEND_API_KEY ?? '').trim(); // debe empezar por re_
    const FROM_TO = (import.meta.env.WEBKODE_EMAIL_DIRECTION ?? '').trim(); // remitente verificado en Resend

    // 2) Validaciones tempranas
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({
        success: false,
        error: 'RESEND_API_KEY is missing (undefined/empty).'
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
        error: 'WEBKODE_EMAIL_DIRECTION is missing.'
      }), { status: 500 });
    }

    // 3) Llamada a Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_TO, // ideal: "Nombre <soporte@tudominio.com>"
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

    // 4) Devuelve info clara si falla Resend
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
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error?.message }), { status: 500 });
  }
};
