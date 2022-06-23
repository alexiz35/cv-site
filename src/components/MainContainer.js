import AboutMe from "./AboutMe";
import React from "react";
import './MainContainer.scss'
import {AboutContent, ExperienceContent, SkillsContent} from "./Content"

export default function MainContainer() {
    return (
        <>
            <div id="about" className={'mainContainer'}>
                <AboutMe tittle = "AboutMe" content = {<AboutContent/>} />
            </div>
            <div id ="skills" className={'mainContainer'}>
                <AboutMe tittle = "Skills" content = {<SkillsContent/>}/>
            </div>
            <div id ="experience" className={'mainContainer'}>
                <AboutMe tittle = "Experience" content = {<ExperienceContent/>}/>
            </div>

        </>
    )
}
