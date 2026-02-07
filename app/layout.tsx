import "../styles/style.css";
import Script from "next/script";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Eduardo Valadez",
  themeColor: "#171b3c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          defer
        />
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" defer />
      </head>
      <body>
        
        <AuthProvider>{children}</AuthProvider>

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          strategy="afterInteractive"
        />

        <Script id="emailjs-init" strategy="afterInteractive">
          {`
            (function () {
              emailjs.init("FirdkIrXUER084fnZ");
            })();
          `}
        </Script>

        <Script
          src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
