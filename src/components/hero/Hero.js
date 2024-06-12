import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({movies}) => {
    return (
        <div>
            <Me/>
            <ProgrammingLanguages movies={movies}/>
        </div>
    )
}
const Me = ()=>{
        return (
    
            <div className ='me-container'>
                <h3  >Hi, I am </h3>
                <h1> Prathamesh Bhagat</h1>
                <h6> 
                    A versatile programmer, creative in crafting effective software to 
                    propel competitive advantage.  
                </h6>
                <h6> 
                    NPTEL-certified Java developer (IIT-KGP),skilled in Python development with a clear understanding of OOPS,
                    expertise in JavaScript, and familiarity with REST APIs and DBMS. 
                </h6>
                <h6> 
                    Experienced in full-stack and Android development
                    with JavaScript, PHP, Python, Java, and SQL. 
                </h6>
            </div>
        );
    };
    
const ProgrammingLanguages = ({movies}) => { 
  return (
    <div className ='movie-carousel-container'>
      <h1 style={{marginTop:"5%",backgroundColor:"red"}}>Programming<br/> Languages</h1>
      <Carousel>
        {
            movies?.map((movie,index) =>{
                return(
                    <Paper key={index}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${movie.poster})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h1>{movie.title}</h1>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <a href="https://wa.me/7058031648" >
                                                <Button variant ="info" className="btn btn-primary">Connect</Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
