

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <h2 className="experience-title">EXPERIENCE</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                        <h3>KodeKlan</h3>
                        <p className="position">Junior Software Engineer</p>
                        <p className="date">Dec 2024 – July 2025</p>
                        <p>
                            Started as a Junior Software Developer, contributing
                            to full-stack web applications, RESTful APIs, and
                            front-end development using React.js and modern UI
                            practices.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                        <h3>KodeKlan</h3>
                        <p className="position">Software Engineer</p>
                        <p className="date">July 2025 – Present</p>
                        <p>
                            Promoted to Software Developer, leading feature
                            implementations, collaborating across teams, and
                            optimizing performance for scalable web solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
