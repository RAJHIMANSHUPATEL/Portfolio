import React from 'react'
import { PiFileCpp } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
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
            <div className="stack">
                <article>
                    <PiFileCpp className="tech-stack-icon"/>
                    <h4>C++</h4>
                </article>
                <article>
                    <SiMongodb className="tech-stack-icon"/>
                    <h4>MongoDB</h4>
                </article>
                <article>
                    <SiExpress className="tech-stack-icon"/>
                    <h4>Express</h4>
                </article>
                <article>
                    <FaReact className="tech-stack-icon"/>
                    <h4>React</h4>
                </article>
                <article>
                    <FaNodeJs className="tech-stack-icon"/>
                    <h4>Node

                    </h4>
                </article>
                <article>
                    <TiHtml5 className="tech-stack-icon"/>
                    <h4>HTML</h4>
                </article>
                <article>
                    <FaCss3 className="tech-stack-icon"/>
                    <h4>CSS</h4>
                </article>
                <article>
                    <SiTailwindcss className="tech-stack-icon"/>
                    <h4>Tailwind</h4>
                </article>
                <article>
                    <RiBootstrapLine className="tech-stack-icon"/>
                    <h4>Bootstrap</h4>
                </article>
                <article>
                    <TbSql className="tech-stack-icon"/>
                    <h4>SQL</h4>
                </article>
                <article>
                    <GrMysql className="tech-stack-icon"/>
                    <h4>MySQL</h4>
                </article>
            </div>
            </section>
        </div>
    )
}

export default TechStack