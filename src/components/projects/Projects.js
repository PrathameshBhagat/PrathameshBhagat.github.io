import React from 'react'
import './Projects.css'

const Project = ({year,title,image,language,href}) => {
    return (
        <div className="project" >
                <div>
                    <p>{year}</p>
                </div>

                <div>
                    <img src={image}
                        onDoubleClick={()=>{
                                href != null ? window.location.href = href : window.alert("Sorry the project link is unavailable")}}/>
                </div>

                <div>
                    <span>{language}</span>
                    <h3>{title}</h3>
                </div>
            </div>
    )
}

const Projects = () => {

  return (
    <>
        <h1 style={{margin:"25% auto 5%",backgroundColor:"grey",fontWeight:"bold"}}>Projects<br/></h1>

        <h6 style={{margin:"0 auto 10%"}}>Double click to view the code</h6>

        <div className="Projects" >
            <Project title={"Drone"} image={"/drone.png"} language={"C++ & JS"} year={"2023-24"} href="https://github.com/PrathameshBhagat/Drone-Branches-Project"/>
            <Project title={"Converter"} image={"/currencyConverter.png"} language={"Java & Spring"} year={"2024"} href="https://github.com/PrathameshBhagat/Spring-Earning-Revenue-Converter"/>
        </div>
        <div className="Projects" >
            <Project title={"Stocks"} image={"/stock.jpg"} language={"Python & Java"} year={"2021-22"} href="https://github.com/PrathameshBhagat/Pratice-Files/tree/main/PPLab"/>
            <Project title={"Android"} image={"/ofyWellness.jpg"} language={"C++ & JS"} year={"2024"} href="https://github.com/PrathameshBhagat/OFY-Wellness/releases/tag/0.1.0"/>
        </div>
        <div className="Projects" >
            <Project title={"Docs"} image={"/documentation.png"} language={"JS & CSS"} year={"2022"} href="https://github.com/PrathameshBhagat/Documentation-Project"/>
            <Project title={"Editor"} image={"/editor.png"} language={"JS & PHP"} year={"2022"} href="https://www.youtube.com/watch?feature=shared&v=OoUNVvhEFZg"/>
        </div>
    </>
    )
}

export default Projects