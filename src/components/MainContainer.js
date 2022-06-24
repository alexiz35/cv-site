import AboutMe from "./AboutMe";
import React from "react";
import './MainContainer.scss'
import {
    AboutContent,
    CoursesContent,
    EducationContent,
    ExperienceContent,
    GithubContent,
    SkillsContent
} from "./Content"

export default function MainContainer() {
    return (
        <>
            <div id="about" className={'mainContainer'}>
                <AboutMe tittle = "AboutMe" content = {<AboutContent/>} />
            </div>
            <div id ="skills" className={'mainContainer'}>
                <AboutMe tittle = "Skills" content = {<SkillsContent/>}/>
            </div>
            <div id ="github" className={'mainContainer'}>
                <AboutMe tittle = "GitHub" content = {<GithubContent/>}/>
            </div>
            <div id ="experience" className={'mainContainer'}>
                <AboutMe tittle = "Experience" content = {<ExperienceContent/>}/>
            </div>
            <div id ="education" className={'mainContainer'}>
                <AboutMe tittle = "Education" content = {<EducationContent/>}/>
            </div>
            <div id ="courses" className={'mainContainer'}>
                <AboutMe tittle = "Courses" content = {<CoursesContent/>}/>
            </div>
        </>
    )
}
