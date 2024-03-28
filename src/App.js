import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () =>{
      const response = [{
                      title:"prat", 
                      trailerLink:"https://www.youtube.com/watch?v=5PdEmeopJVQ", 
                      poster:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
                    },
                      {
                        title:"prat",
                        trailerLink:"https://www.youtube.com/watch?v=5PdEmeopJVQ",                        
                        poster:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"},
                      {
                        title:"prat",
                        trailerLink:"https://www.youtube.com/watch?v=5PdEmeopJVQ",    
                        poster:"https://static.javatpoint.com/core/images/java-logo1.png"},
                        {
                          title:"prat",
                          trailerLink:"https://www.youtube.com/watch?v=5PdEmeopJVQ",
                          poster:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"}];

      setMovies(response);
  }

  useEffect(() => {getMovies();},[])

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route >
            <Route path="/" element={<Hero movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
