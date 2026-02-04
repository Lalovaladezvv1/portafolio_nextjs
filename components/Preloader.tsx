"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wakeUpApi = async () => {
      try {
        await fetch("https://apidonetportfolio.onrender.com/api/v1/Educacion", {
          cache: "no-store",
          mode: "no-cors",
        });
      } catch (err) {
        console.error("API no responde", err);
      } finally {
        setTimeout(() => setLoading(false), 2500);
      }
    };

    wakeUpApi();
  }, []);

  if (loading) {
  return (
    <div className="preloader">
      <div className="preloader-inner">

        <img
          src="/assets/img/logo_ev.png"
          alt="Eduardo Valadez"
          className="preloader-logo"
        />

        <h1 className="preloader-title">Eduardo Valadéz</h1>

        <p className="preloader-subtitle">Cargando recursos…</p>

        <div className="preloader-line">
          <span />
        </div>

      </div>
    </div>
  );
}




  return <>{children}</>;
}
