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
                        onClick={()=>{
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
    <div  className='project-container'>
        <h1 style={{margin:"10% auto 5%",backgroundColor:"grey",fontWeight:"bold"}}>
            Projects
        </h1>

        <div className="project-row" >
            <Project title={"Drone"} image={"/drone.png"} language={"C++ & JS"} year={"2023-24"} href="https://github.com/PrathameshBhagat/Drone-Branches-Project"/>
            <Project title={"Converter"} image={"/currencyConverter.png"} language={"Java & Spring"} year={"2024"} href="https://github.com/PrathameshBhagat/Spring-Earning-Revenue-Converter"/>
        </div>
        <div className="project-row" >
            <Project title={"Stocks"} image={"/stock.jpg"} language={"Python & Java"} year={"2021-22"} href="https://github.com/PrathameshBhagat/Pratice-Files/tree/main/PPLab"/>
            <Project title={"Android"} image={"/ofyWellness.jpg"} language={"C++ & JS"} year={"2024"} href="https://github.com/PrathameshBhagat/OFY-Wellness"/>
        </div>
        <div className="project-row" >
            <Project title={"Docs"} image={"/documentation.png"} language={"JS & CSS"} year={"2022"} href="https://github.com/PrathameshBhagat/Documentation-Project"/>
            <Project title={"Editor"} image={"/editor.png"} language={"JS & PHP"} year={"2022"} href="https://www.youtube.com/watch?feature=shared&v=OoUNVvhEFZg"/>
        </div>
    </div>
    )
}

export default Projects