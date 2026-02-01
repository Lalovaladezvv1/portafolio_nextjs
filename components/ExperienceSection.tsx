"use client";
import { useEffect } from "react";

export default function ExperienceSection() {

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

  return (
    <section className="section-timeline" id="experiencia">
      <h2 className="heading">Experiencia</h2>

      <div className="timeline-cv">
        <div className="container-timeline right-container">
          <img
            src="/assets/img/jobs/hdi_logo.png"
            alt="HDI Seguros"
          />
          <div className="text-box">
            <h2>HDI Seguros</h2>
            <small>Agosto 2024 - Actualidad | León, Guanajuato, Mex.</small>
            <br />
            <h4>Ingeniero de Software</h4>
            <br />
            <p>
              Actualmente, en HDI Seguros, formo parte del área de siniestros,
              donde mantengo y desarrollo nuevas funcionalidades para la
              aplicación móvil nativa de Android, Ajustador Móvil, utilizando
              Java. Simultáneamente, diseño y desarrollo microservicios en .NET,
              integrándolos con la aplicación para optimizar el desempeño y la
              gestión de procesos relacionados con siniestros.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container-timeline left-container">
          <img
            src="/assets/img/jobs/evolve_logo.png"
            alt="Evolve Interactive"
          />
          <div className="text-box">
            <h2>Evolve Interactive</h2>
            <small>Enero 2024 - Julio 2024 | CDMX, México</small>
            <br />
            <h4>Ingeniero de Software - Desarrollador Móvil</h4>
            <br />
            <p>
              Fuí líder de desarrollo, mantenimiento y correcto funcionamiento
              de la aplicación móvil principal para iOS usando Swift y UIKit.
              Participé en la migración a Flutter, optimizando recursos y
              eficiencia multiplataforma.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>



        <div className="container-timeline right-container">
          <img
            src="/assets/img/jobs/paika_logo.png"
            alt="Paika App"
          />
          <div className="text-box">
            <h2>Paika App</h2>
            <small>Julio 2021 - Diciembre 2023 | San Francisco, USA</small>
            <br />
            <h4>Desarrollador de Software - Líder de Equipo</h4>
            <br />
            <p>
              Diseñé la arquitectura del sistema y desarrollé soluciones full
              stack con Flutter y Node.js. Posteriormente lideré el equipo bajo
              metodología Scrum.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
