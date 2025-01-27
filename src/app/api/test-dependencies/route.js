import nodemailer from "nodemailer";
import { jsPDF } from "jspdf";

export async function POST(req) {
  try {
    const body = await req.json();
    const answers = body.answers;

    // Probar jsPDF
    const doc = new jsPDF();
    // Configuración inicial del PDF
    let yPosition = 5; // Posición vertical inicial
    const lineHeight = 5; // Altura de línea
    const marginLeft = 10; // Margen izquierdo

    // Agregar título al PDF
    doc.setFontSize(18);
    doc.text("Preguntas y Respuestas", marginLeft, yPosition);
    yPosition += lineHeight * 2; // Aumentar espacio después del título

    // Recorrer el array de preguntas y agregarlas al PDF
    doc.setFontSize(8);
    answers.forEach((item) => {
      // Agregar pregunta
      doc.text(`${item.id}. ${item.question}`, marginLeft, yPosition);
      yPosition += lineHeight;

      // Agregar respuesta (si existe)
      if (item.answer) {
        doc.text(`Respuesta: ${item.answer}`, marginLeft + 5, yPosition);
        yPosition += lineHeight;
      }

      // Espacio entre preguntas
      yPosition += lineHeight;
    });

    // Convertir el PDF a un buffer
    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

    // Probar nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tomasj@companycreativa.com",
        pass: "zjec klai iqug konq",
      },
    });

    await transporter.sendMail({
      from: `"Nuevo Brief Naming" <"tomasj@companycreativa.com">`,
      to: "tomasj@companycreativa.com",
      subject: "Brief Naming",
      text: "Hay un nuevo formulario de brief naming",
      attachments: [
        {
          filename: "test.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return new Response(
      JSON.stringify({ message: "Las dependencias funcionan correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error al probar las dependencias", error }),
      { status: 500 }
    );
  }
}
