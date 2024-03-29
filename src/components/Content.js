import React from "react";

const styleContent = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
}

const styleAbout = {
    padding: "20px",
    fontSize: "1.1em",
}

const styleDiv = {
    width: "295px",
}

export function AboutContent() {
    return (
        <>
            <h5 align={"justify"} style={styleAbout}>

                I’m a beginner frontend developer, have the ability to learn quickly and have a great desire to learn
                new technologies. I have experience in the HTML5, CSS/SCSS, JavaScript, REACT, Redux, Bootstrap, RestAPI, GIT,
                and little experience Next.js, Node.js, Express, MongoDB.
                I finished courses and have diplomas and certificates in these courses. There are my commercial and pet
                projects on GitHub, some of them I'm currently rewriting.For example, this CV I wrote on React and
                deployed it on hosting.
                Previously, I was developing electronic devices, programming of microcontrollers (assembler, C) and
                created several android application (Java).
                Currently, looking for an interesting job where I can be useful to the company and can get experience
                for further development.

            </h5>
        </>
    )
}

export function SkillsContent() {
    return (
        <>
            <h4 align={"center"}>My currently skills</h4>
            <div style={styleContent}>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>Programming languages :</b> <i>JavaScript, HTML5, CSS3, SASS</i>
                        </li>
                        <li>
                            <b>Technologies and frameworks:</b> <i>React,Redux,Bootstrap,Next.js,Node.js,Git,Express</i>
                        </li>
                        <li>
                            <b>Databases:</b> <i>MongoDB</i>
                        </li>
                    </ul>
                </div>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>Development environments (IDE):</b> <i>WebStorm, PHPStorm, VS Code</i>
                        </li>
                        <li>
                            <b>Design:</b> <i>Figma, Photoshop</i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function ExperienceContent() {
    return (
        <>
            <h4 align={"center"}>Work experience</h4>
            <div style={styleContent}>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>Head of the company\ Developer </b><br/>
                            <i>L.T.U.(LaserTagUkraine) | Kharkiv

                                10.2018 - Present (3 years 8 months)</i>
                        </li>
                        <li>
                            <b>Responsibilities: </b>
                            <i>Сompany management, development of new devices, programming of microcontrollers, writing
                                programs for android (C, JAVA for AndroidApp).</i>
                        </li>
                    </ul>
                </div>
                <div style={styleDiv}>
                    <li>
                        <b>Electronics engineer </b><br/>
                        <i>Kontur-Delta | Luhansk
                            10.2002 - 04.2014 (11 years 8 months)</i>
                    </li>
                    <li>
                        <b>Responsibilities: </b>
                        <i>Management of a department of 15 people, development of electronic devices and programming of
                            microcontrollers </i>
                    </li>
                    {/*<li>
                        Programming languages: JavaScript, HTML5, CSS3, SASS, Git
                    </li>
                    <li>
                        Technologies and frameworks: React, Bootstrap
                    </li>*/}

                </div>
            </div>
        </>
    )
}

export function GithubContent() {
    return (
        <>
            <h4 align={"center"}>My projects on GitHub</h4>

            <div style={styleContent}>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>MERN - FullStack project written on React, Express, NODE, MongoDB</h6>
                            Technologies: HTML5, CSS3, React, Redux, Node, Express, MongoDB, ReactBootstrap<br/>
                            <a href="http://44.209.18.163">link to site</a><br/>
                            <a href={"https://github.com/alexiz35/mernProject"}>link on GitHub</a>
                        </li>

                    </ul>
                </div>

                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>site Melek - project written on Next.js</h6>
                            Technologies: HTML5, CSS3, React, Next.js, ReactBootstrap, RestAPI<br/>
                            <a href={"https://melek.vercel.app/"}>link to site</a><br/>
                            <a href={"https://github.com/alexiz35/melek"}>link on GitHub</a>
                        </li>

                    </ul>
                </div>

                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>CV - project written on React.js</h6>
                            Technologies: HTML5, CSS3, React, SCSS, ReactBootstrap<br/>
                            <a href="http://iziumov.byethost7.com/">link to site</a><br/>
                            <a href={"https://github.com/alexiz35/cv-site"}>link on GitHub</a>
                        </li>

                    </ul>
                </div>

                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>TestTask - project written on React.js</h6>
                            Technologies: HTML5, CSS3, React, SCSS, ReactBootstrap, RestApi, PixelPerfect<br/>
                            <a href={"https://github.com/alexiz35/test_task"}>Link on GitHub</a>
                        </li>

                    </ul>
                </div>

                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>App TIR - project written on Java</h6>
                            Technologies: JAVA, AndroidStudio<br/>
                            <a href={"https://www.youtube.com/watch?v=GfdVFe3UbXk"}>YouTube Presentation</a>,
                            <a href={"https://github.com/alexiz35/TIR"}>link on GitHub</a>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export function EducationContent() {
    return (
        <>
            <h4 align={"center"}>Education and Languages</h4>
            <div style={styleContent}>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>East Ukrainian National University </b><br/>
                            <i> electronic engineering<br/>
                                Specialist<br/>
                                electronic equipment engineer<br/>

                                06.1994 - 06.1999 (5 years)</i>
                        </li>
                    </ul>
                </div>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>Languages </b><br/>
                        </li>
                        <ul>
                            <li>
                                English - Intermediate <br/>
                                (reading technical documentation and сonducting correspondence, I'm developing my speaking skills.)
                            </li>
                            <li>
                                Russian - Native
                            </li>
                            <li>
                                Ukrainian - Native
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function CoursesContent() {
    return (
        <>
            <h4 align={"center"}>Online Courses and Certificate</h4>
            <div style={styleContent}>

                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>ITVDN online</b> <br/>
                            <i>Course "Javascript"</i><br/>
                            <b>Certificate on Testprovider:</b><br/>
                            <ul>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp60227846"}>TP60227846</a> -
                                    JavaScript Starter
                                </li>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp57862634"}>TP57862634</a> -
                                    JavaScript 2021
                                </li>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp96839141"}>TP96839141</a> -
                                    ECMASCRIPT 6
                                </li>
                                <b>Diploma on Testprovider:</b><br/>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/TP53666595D"}>TP53666595D</a> -
                                    JavaScript Developer
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>ITVDN online</b> <br/>
                            <i>Course "React basic, React Advance"</i><br/>
                            <b>Certificate on Testprovider:</b><br/>
                            <ul>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp84068860"}>TP84068860</a> -
                                    React Advanced
                                </li>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp93626598"}>TP93626598</a> -
                                    React Essential
                                </li>
                                <b>Diploma on Testprovider:</b><br/>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp39988989d"}>TP39988989D</a> -
                                    React Developer
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div style={styleDiv}>
                    <ul>

                        <li>
                            <b>ITVDN online</b> <br/>
                            <i>Course "HTML5&CSS3 Basic"</i><br/>
                            <b>Certificate on Testprovider:</b><br/>
                            <ul>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp30301924"}>TP30301924</a> -
                                    HTML5&CSS3 Basic
                                </li>
                            </ul>
                        </li>
                        <i>Course "GIT basic"</i><br/>
                        <b>Certificate on Testprovider:</b><br/>
                        <ul>
                            <li>
                                <a href={"https://testprovider.com/ru/search-certificate/tp43132330"}>TP43132330</a> -
                                Git Basic
                            </li>
                        </ul>

                    </ul>
                </div>


            </div>
        </>
    )
}