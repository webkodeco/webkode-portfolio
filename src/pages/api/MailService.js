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

    const apiKey = `${import.meta.env.RESEND_API_KEY}`;

    console.log("API Key:", apiKey); // Verifica que la clave se está leyendo correctamente
    // Enviar correo usando fetch directo a la API de Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: import.meta.env.WEBKODE_EMAIL_DIRECTION,
        to: import.meta.env.WEBKODE_EMAIL_DIRECTION,
        subject: `Quiero contactarte 🚀 - ${customerName}`,
        html: `
          <p><strong>Nombre:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>País:</strong> ${customerCountry || "No especificado"}</p>
          <p><strong>Teléfono:</strong> ${customerPhone || "No especificado"}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
};
