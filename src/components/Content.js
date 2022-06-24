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
            <h5 align={"justify"} style={styleAbout}>I was developing electronic devices, programming of
                microcontrollers (assembler, C). I am the founder of
                a unique laser tag company in Ukraine:<a
                    href="https://www.facebook.com/lasertagukraine"> L.T.U.</a> .<br/><br/>
                I decided to change my career in 2022 based on:
                <ol>
                    <li>
                        The war in Ukraine and the problems of production in such conditions
                    </li>
                    <li>
                        and most importantly - I always wanted to do programming and I see the future in web
                        programming.
                    </li>
                </ol>
                At the moment I am self-studying HTML,CSS,Javascript, React, Next.js . I have several certificates of
                passing online courses in these languages. I am rewriting the site of my company on Next.js and made a
                test project. They are uploaded to github.
                I want to enter web programming starting from the minimum FrontEnd position and reach the FullStack
                level.
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
                            <b>Programming languages:</b> <i>JavaScript, HTML5, CSS3, SASS, Git</i>
                        </li>
                        <li>
                            <b>Technologies and frameworks:</b> <i>React, Bootstrap,Next.js</i>
                        </li>
                        <li>
                            <b> Web servers:</b> <i>Apache</i>
                        </li>
                        <li>
                            <b>Databases:</b> <i>MySQL</i>
                        </li>
                    </ul>
                </div>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <b>Development environments (IDE):</b> <i>WebStorm, PHPStorm</i>
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
                                programs for android.</i>
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
                            microcontrollers</i>
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
                            <h6>CV - project written on React.js</h6>
                            Technologies: HTML5, CSS3, React, SCSS, ReactBootstrap<br/>
                            URL, <a href={"https://github.com/alexiz35/cv-site"}>link on GitHub</a>
                        </li>

                    </ul>
                </div>
                <div style={styleDiv}>
                    <ul>
                        <li>
                            <h6>site LTU - project written on Next.js</h6>
                            Technologies: HTML5, CSS3, React, Next.js, SCSS, ReactBootstrap, MySql<br/>
                            <a href={"http://www.ltu.com.ua/"}>URL</a>, <a
                            href={"https://github.com/alexiz35/site-ltu"}>link
                            on GitHub</a>
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
                                English - Pre-Intermediate <br/>
                                (reading technical documentation and сonducting correspondence)
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
                                    JavaScript Essential 2021
                                </li>
                                <li>
                                    <a href={"https://testprovider.com/ru/search-certificate/tp96839141"}>TP96839141</a> -
                                    ECMASCRIPT 6
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>


            </div>
        </>
    )
}