import AboutMe from "./AboutMe";
import React, {useContext, useEffect} from "react";
import './MainContainer.scss'
import {
    AboutContent,
    CoursesContent,
    EducationContent,
    ExperienceContent,
    GithubContent,
    SkillsContent
} from "./Content"
import {NameMenu} from "./App";

export default function MainContainer() {

    const [menuItem, setMenuItem] = useContext(NameMenu);

    useEffect(() => {
        window.onscroll = () => {
            targetElement();
        }
    }, [])

    function targetElement() {
        const target = document.querySelectorAll('.mainContainer');
        target.forEach((item) => {
            if (item.getBoundingClientRect().top < 60 && item.getBoundingClientRect().top > -50) {
                item.className = "mainContainer target2";
                setMenuItem(item.id)
                return;
            } else {
                item.className = "mainContainer"
            }
        })
    }


    return (
        <>
            <div id="about" className={'mainContainer'}>
                <AboutMe tittle="AboutMe" content={<AboutContent/>}/>
            </div>
            <div id="skills" className={'mainContainer'}>
                <AboutMe tittle="Skills" content={<SkillsContent/>}/>
            </div>
            <div id="github" className={'mainContainer'}>
                <AboutMe tittle="GitHub" content={<GithubContent/>}/>
            </div>
            <div id="experience" className={'mainContainer'}>
                <AboutMe tittle="Experience" content={<ExperienceContent/>}/>
            </div>
            <div id="education" className={'mainContainer'}>
                <AboutMe tittle="Education" content={<EducationContent/>}/>
            </div>
            <div id="courses" className={'mainContainer'}>
                <AboutMe tittle="Courses" content={<CoursesContent/>}/>
            </div>
        </>
    )
}
