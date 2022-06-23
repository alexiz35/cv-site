import React from "react";

const styleContent = {
    display: "flex",
    justifyContent: "space-around",
}

const styleAbout ={
    padding:"20px",
    fontSize:"1.1em",
}

export function AboutContent() {
    return (
        <>
            <h5 align={"justify"} style={styleAbout}>I was developing electronic devices, programming of microcontrollers (assembler, C). I am the founder of
                a unique laser tag company in Ukraine:<a href="https://www.facebook.com/lasertagukraine"> L.T.U.</a> .<br/><br/>
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

            <h4 align={"center"}>Currently I have the these skills</h4>
            <div style={styleContent}>
                <div>
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
                <div style={{marginLeft: "10px"}}>
                    <li>
                        <b>Development environments (IDE):</b> <i>WebStorm, PHPStorm</i>
                    </li>
                    <li>
                        <b>Design:</b> <i>Figma, Photoshop</i>
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

export function ExperienceContent() {
    return (
        <>
            <h4 align={"center"}>Work experience</h4>
            <div style={styleContent}>
                <div>
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
                <div style={{marginLeft: "10px"}}>
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