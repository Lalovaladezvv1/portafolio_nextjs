
export default function HomeSection() {
    return (
        <section className="home container" id="home">
            <div className="home-content">
                <div className="home-img animate__animated animate__fadeInLeft">
                    <img src="/assets/img/profile.png" alt="Eduardo Valadez" />
                </div>

                <div className="home-text animate__animated animate__bounceInUp">
                    <h3>INGENIERO EN SOFTWARE</h3>
                    <h2>Hola, Soy <span className="color">Eduardo</span></h2>
                    <p>
                        Aquí es donde cada proyecto es una nueva aventura...
                    </p>
                </div>
                <div className="social">
                    <a
                        href="https://www.linkedin.com/in/eduardovaladezv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bx bxl-linkedin-square"></i>
                    </a>


                    <a
                        href="https://github.com/Lalovaladezvv1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
