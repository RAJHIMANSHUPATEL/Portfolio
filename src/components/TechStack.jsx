import React from 'react';
import { SiMongodb, SiExpress, SiTailwindcss, SiGithub } from "react-icons/si";
import { FaReact, FaNodeJs, FaCss3, FaJava } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiBootstrapLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";


function TechStack() {
    return (
        <div className='tech-stack' id='tech-stack'>
            <section className="section section-center">
                <div className="tech-title">
                    <h2>Tech Stack</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="stack-grid">
                    <article className="tech-card">
                        <FaJava className="tech-icon" />
                        <h4>Java</h4>
                    </article>
                    <article className="tech-card">
                        <SiMongodb className="tech-icon" />
                        <h4>MongoDB</h4>
                    </article>
                    <article className="tech-card">
                        <SiExpress className="tech-icon" />
                        <h4>Express</h4>
                    </article>
                    <article className="tech-card">
                        <FaReact className="tech-icon" />
                        <h4>React</h4>
                    </article>
                    <article className="tech-card">
                        <FaNodeJs className="tech-icon" />
                        <h4>Node</h4>
                    </article>
                    <article className="tech-card">
                        <TiHtml5 className="tech-icon" />
                        <h4>HTML</h4>
                    </article>
                    <article className="tech-card">
                        <FaCss3 className="tech-icon" />
                        <h4>CSS</h4>
                    </article>
                    <article className="tech-card">
                        <SiTailwindcss className="tech-icon" />
                        <h4>Tailwind</h4>
                    </article>
                    <article className="tech-card">
                        <RiBootstrapLine className="tech-icon" />
                        <h4>Bootstrap</h4>
                    </article>
                    <article className="tech-card">
                        <TbSql className="tech-icon" />
                        <h4>SQL</h4>
                    </article>
                    <article className="tech-card">
                        <GrMysql className="tech-icon" />
                        <h4>MySQL</h4>
                    </article>
                    <article className="tech-card">
                        <SiGithub className="tech-icon" />
                        <h4>GitHub</h4>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default TechStack;
