// import nodemailer from "nodemailer";
// import { jsPDF } from "jspdf";

// export async function generateAndSendBrief(answers, recipientEmail) {
//   try {
//     // Generar PDF
//     const doc = new jsPDF();
//     let yPosition = 5;
//     const lineHeight = 5;
//     const marginLeft = 10;

//     doc.setFontSize(18);
//     doc.text("Preguntas y Respuestas", marginLeft, yPosition);
//     yPosition += lineHeight * 2;

//     doc.setFontSize(8);
//     answers.forEach((item) => {
//       doc.text(`${item.id}. ${item.question}`, marginLeft, yPosition);
//       yPosition += lineHeight;
      
//       if (item.answer) {
//         doc.text(`Respuesta: ${item.answer}`, marginLeft + 5, yPosition);
//         yPosition += lineHeight;
//       }
//       yPosition += lineHeight;
//     });

//     const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

//     // Configurar transporte de email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL_USER_FEDE,
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASS_FEDE,
//       },
//     });

//     // Enviar email
//     await transporter.sendMail({
//       from: `"Nuevo Brief Naming" <${process.env.NEXT_PUBLIC_EMAIL_USER_FEDE}>`,
//       to: recipientEmail,
//       subject: "Brief Naming",
//       text: "Hay un nuevo formulario de brief naming",
//       attachments: [{
//         filename: "brief-naming.pdf",
//         content: pdfBuffer,
//         contentType: "application/pdf",
//       }],
//     });

//     return { success: true, message: "Brief enviado correctamente" };
//   } catch (error) {
//     console.error("Error en generateAndSendBrief:", error);
//     return { success: false, message: error.message };
//   }
// }