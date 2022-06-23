import React from "react";
import './AboutMe.scss'

export default function AboutMe(props) {
    return (
        <>
            <div className={"tittleAbout"}>
                <span className={"content"} > <span>{props.tittle}</span></span>
            </div>
            <div className={"aboutMe"} >
                {props.content}
            </div>
        </>
    )
}