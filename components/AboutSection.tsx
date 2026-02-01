"use client";
import { useState } from "react";

export default function AboutSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="about container" id="about">
            <h2 className="heading">Acerca de</h2>

            <div className="about-content">
                <div className="about-data">
                    <span>Acerca de mí</span>
                    <h2>Tecnología, aprendizaje y determinación</h2>

                    <div className="about-text">
                        <p>
                            Soy una persona entusiasta y apasionada por la tecnología, con un
                            enfoque en el aprendizaje y la mejora continua. Mi naturaleza
                            autodidacta me permite adquirir nuevas habilidades de manera
                            independiente y enfrentar desafíos con determinación.
                            ¡Descarga mi CV y descubre más!
                        </p>
                    </div>

                    <a
                        href="assets/docs/cvEduardoValadez.pdf"
                        className="btn"
                        download
                    >
                        Descargar CV
                        <i className="bx bx-download"></i>

                        <div className="progress-wrapper">
                            <div className="inner"></div>
                            <div className="checkmark">
                                <span></span>
                                <span></span>
                            </div>
                            <div className="circle">
                                <div className="bar left">
                                    <div className="progress"></div>
                                </div>
                                <div className="bar right">
                                    <div className="progress"></div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="about-text">
                    <div className="tabs">
                        <div className="tab-header">
                            <div
                                className={active === 0 ? "active" : ""}
                                onClick={() => setActive(0)}
                            >
                                <i className="bx bx-code"></i> Skills
                            </div>

                            <div
                                className={active === 1 ? "active" : ""}
                                onClick={() => setActive(1)}
                            >
                                <i className="bx bx-book-open"></i> Educación
                            </div>
                        </div>

                        <div
                            className="tab-indicator"
                            style={{
                                transform: `translateX(${active * 100}%)`,
                            }}
                        ></div>

                        <div className="tab-body">
                            {active === 0 && (
                                <div className="active" id="skills">
                                    <p>Habilidades técnicas</p>

                                    <ul>
                                        <li>
                                            Desarrollo Móvil
                                            <ul>
                                                <li>• Swift (SwiftUI & UiKit)</li>
                                                <li>• Android (Java & Kotlin)</li>
                                                <li>• Flutter (Dart)</li>
                                            </ul>
                                        </li>

                                        <li>
                                            Desarrollo Web
                                            <ul>
                                                <li>• Html</li>
                                                <li>• Css</li>
                                                <li>• Javascript</li>
                                                <li>• PHP</li>
                                            </ul>
                                        </li>

                                        <li>
                                            Desarrollo Backend
                                            <ul>
                                                <li>• Node JS (Javascript)</li>
                                                <li>• .Net (C#)</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <p>Habilidades blandas</p>

                                    <ul>
                                        <li>
                                            Pensamiento crítico
                                            <ul>
                                                <li>• Voluntad de aprender</li>
                                                <li>• Habilidades para solucionar problemas</li>
                                            </ul>
                                        </li>

                                        <li>
                                            Liderazgo
                                            <ul>
                                                <li>• Dar retroalimentación clara</li>
                                                <li>• Delegación</li>
                                                <li>• Toma de decisiones</li>
                                            </ul>
                                        </li>

                                        <li>
                                            Trabajo en equipo
                                            <ul>
                                                <li>• Aceptación de comentarios</li>
                                                <li>• Inteligencia emocional</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {active === 1 && (
                                <div className="active" id="education">
                                    <div className="education-card active">
                                        <div className="education-row">
                                            <span className="education-degree">Licenciatura</span>
                                            <span className="education-school">UPPE</span>
                                        </div>

                                        <h3 className="education-title">Ingeniería en Software</h3>

                                        <p className="education-subtitle">
                                            Universidad Politécnica de Pénjamo
                                        </p>

                                        <div className="education-credential">
                                            <span>Cédula profesional</span>
                                            <strong>14881565</strong>
                                        </div>
                                    </div>

                                    <div className="education-card active">
                                        <div className="education-row">
                                            <span className="education-degree">Maestría</span>
                                            <span className="education-school">UVEG</span>
                                        </div>

                                        <h3 className="education-title">Inteligencia Artificial</h3>

                                        <p className="education-subtitle">
                                            Universidad Virtual del Estado de Guanajuato
                                        </p>

                                        <div className="education-credential">
                                            <span>En curso</span>
                                        </div>
                                    </div>


                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
