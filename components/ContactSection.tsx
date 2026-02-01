"use client";

import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function ContactSection() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem(
            "message"
          ) as HTMLTextAreaElement).value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        swal("¡Mensaje enviado!", "Gracias por contactarme 😄", "success");
        form.reset();
      })
      .catch(() => {
        swal("Error", "No se pudo enviar el mensaje", "error");
      });
  };

  return (
    <section className="contact container" id="contact">
      <h2 className="heading">Contacto</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        <input name="name" placeholder="Tu nombre" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Mensaje" required />
        <input type="submit" value="Enviar" className="send-btn" />
      </form>
    </section>
  );
}
