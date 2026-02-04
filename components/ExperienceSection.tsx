"use client";
import { useState, useEffect } from "react";
import { ExperienciaLaboral } from "@/tipos/ExperienciaLaboral";

export default function ExperienceSection() {
  const [experienciaLaboral, setExperienciaLaboral] = useState<ExperienciaLaboral[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timelineSection = document.querySelector(".timeline-cv");

    function verificarVisibilidad() {
      if (!timelineSection) return;

      const rect = timelineSection.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;

      if (visible) {
        timelineSection.classList.add("animate");

        document.querySelectorAll(".container-timeline").forEach((el) => {
          el.classList.add("animate");
        });

        window.removeEventListener("scroll", verificarVisibilidad);
      }
    }

    window.addEventListener("scroll", verificarVisibilidad);
    verificarVisibilidad();

    return () => {
      window.removeEventListener("scroll", verificarVisibilidad);
    };
  }, []);

  useEffect(() => {
    fetch("/api/experiencia")
      .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(data => {
        setExperienciaLaboral(data);
      })
      .catch(err => {
        console.error("Error de API:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-timeline" id="experiencia">
      <h2 className="heading">Experiencia</h2>

      <div className="timeline-cv">
        {loading && <p>Cargando experiencia laboral...</p>}

        {error && <p>Error: {error}</p>}

        {!loading && !error && experienciaLaboral.map((exp, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`container-timeline ${isRight ? "right-container" : "left-container"
                }`}
            >
              <img
                src={exp.urlLogoEmpresa}
                alt={exp.empresa}
              />

              <div className="text-box">
                <h2>{exp.empresa}</h2>

                <small>
                  {exp.fechaInicio}
                  {exp.fechaFin ? ` - ${exp.fechaFin}` : " - Actualidad"} | {exp.lugar} | {exp.modalidad}
                </small>

                <br />

                <h4>{exp.puesto}</h4>
                <br />

                <p>{exp.descripcion}</p>

                <span
                  className={
                    isRight ? "right-container-arrow" : "left-container-arrow"
                  }
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
