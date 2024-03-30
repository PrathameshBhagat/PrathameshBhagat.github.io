import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () =>{
    const response = [{
                        title:"Java",
                        trailerLink:"https://www.youtube.com/",
                        poster:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},
                      { 
                        title:"Java Script",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/JavaScript.png"},
                      {
                        title:"Python",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/python.png"},
                      {
                        title:"HTML5",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/html5.png"},
                      {
                        title:"PHP",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/php.png"},
                      {
                        title:"CSS",
                        trailerLink:"https://www.youtube.com/",    
                        poster:"/css.png"},
                      {
                        title:"Prathamesh Bhagat",
                        trailerLink:"https://www.youtube.com/",                        
                        poster:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"}];

      setMovies(response);
  }

  useEffect(() => {getMovies();},[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route >
            <Route path="/" element={<><Hero movies={movies} /><Projects/></>} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
