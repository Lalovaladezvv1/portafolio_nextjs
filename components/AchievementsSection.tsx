import React from "react";

export default function AchievementsSection() {
  return (
    <section className="achievements container" id="achievements">

      <h2 className="heading">Logros</h2>
      <br />

      <div className="achievements-container">
        <h2>Hackathon Soccer and Tech 5ta Edition</h2>
        <h4>León, Guanajuato</h4>
        <h4>2017</h4>

        <div className="imagenes">
          <img
            src="/assets/img/archievements/hb_1.jpg"
            className="horizontal"
            alt="Hackathon Soccer and Tech 5ta Edition"
          />
          <img
            src="/assets/img/archievements/hb_2.jpg"
            className="vertical"
            alt="Hackathon Soccer and Tech 5ta Edition"
          />
        </div>

        <p>
          Conseguí el 1er Lugar en el Hackathon “Soccer & Tech 5ta edición”
          organizado por el Tec de Monterrey Campus León y Club Deportivo León.
          Mi proyecto fue una plataforma (Web y Móvil) para la búsqueda de
          talento deportivo.
        </p>
      </div>

      <br />

      <div className="achievements-container">
        <h2>XX Concurso Nacional de Prototipos</h2>
        <h4>Mérida, Yucatán</h4>
        <h4>2018</h4>

        <div className="imagenes">
          <img
            src="/assets/img/archievements/merida_1.jpg"
            className="horizontal"
            alt="Concurso Nacional de Prototipos"
          />
          <img
            src="/assets/img/archievements/merida_2.jpg"
            className="vertical"
            alt="Concurso Nacional de Prototipos"
          />
        </div>

        <p>
          Participé en el “Concurso Nacional de Prototipos XXI” representando al
          Estado de Guanajuato en la modalidad “Desarrollo de Software” con un
          proyecto sobre el Universo. Desarrollé una aplicación móvil con
          Realidad Aumentada creando un libro interactivo.
        </p>
      </div>

      <br />

      <div className="achievements-container">
        <h2>Concurso Estatal de Prototipos XXI</h2>
        <h4>León, Guanajuato</h4>
        <h4>2017</h4>

        <div className="imagenes">
          <img
            src="/assets/img/archievements/explora.jpg"
            className="horizontal"
            alt="Concurso Estatal de Prototipos"
          />
        </div>

        <p>
          Fui ganador del 1er lugar en el "Concurso Estatal de Prototipos XXI"
          en la modalidad de Desarrollo de Software.
        </p>
      </div>

      <br />

      <div className="achievements-container">
        <h2>AWS Mentefactura Gto Challenge</h2>
        <h4>Silao, Guanajuato</h4>
        <h4>2021</h4>

        <p>
          Se desarrolló un prototipo de cinta transportadora de equipaje
          inteligente para el aeropuerto del Bajío, mostrando en tiempo real
          el estado de la maleta desde una aplicación.
        </p>
      </div>
    </section>
  );
}
