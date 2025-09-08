export const prerender = false;

import { Resend } from "resend";

export const POST = async ({ request }) => {
  try {
    const resend = new Resend(`${import.meta.env.RESEND_API_KEY}`);

    const {
      customerName,
      customerEmail,
      customerCountry,
      customerPhone,
      message,
    } = await request.json();

    const data = await resend.emails.send({
      from: import.meta.env.WEBKODE_EMAIL_DIRECTION,
      to: import.meta.env.WEBKODE_EMAIL_DIRECTION,
      subject: `Quiero contactarte 🚀 - ${customerName}`,
      html: `
          <p><strong>Nombre:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
            <p><strong>País:</strong> ${customerCountry}</p>
          <p><strong>Teléfono:</strong> ${customerPhone}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: error }), {
      status: 500,
    });
  }
};

// const sendMail = async (
//   customerName,
//   customerEmail,
//   customerCountry,
//   customerPhone,
//   message
// ) => {
//   try {

//     const result = await resend.emails.send({
//       from: import.meta.env.WEBKODE_EMAIL_DIRECTION,
//       to: import.meta.env.WEBKODE_EMAIL_DIRECTION,
//       subject: `Quiero contactarte 🚀 - ${customerName}`,
//       html: `
//           <p><strong>Nombre:</strong> ${customerName}</p>
//           <p><strong>Email:</strong> ${customerEmail}</p>
//             <p><strong>País:</strong> ${customerCountry}</p>
//           <p><strong>Teléfono:</strong> ${customerPhone}</p>
//           <p><strong>Mensaje:</strong> ${message}</p>
//         `,
//     });

//     console.log("Email sent successfully:", result);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// export { sendMail };
