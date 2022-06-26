import AboutMe from "./AboutMe";
import React, {useEffect, useState} from "react";
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

   // const [offset, setOffset] = useState(0);

   useEffect(()=> {
       window.onscroll = () => {
           targetElement();
           //console.log()
       }

   },[])

    function targetElement () {
       const target = document.querySelectorAll('.mainContainer');
       target.forEach((item)=>{
           console.log(item.getBoundingClientRect().top)
           if(item.getBoundingClientRect().top < 60 && item.getBoundingClientRect().top > -50) {
               item.className = "mainContainer target2"
           } else {
               item.className = "mainContainer"
           }
           //console.log(item.className)
       })
    }


    return (
        <>
            <div id="about" className={'mainContainer'}>
                <AboutMe tittle = "AboutMe" content = {<AboutContent/> } />
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
