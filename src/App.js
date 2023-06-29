import React, { useEffect, useState } from 'react';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './Components/navbar';

const API_KEY = 'e495f4f525c1920bde468f49a9db71e8';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className='titles'>
      <h1>Cinemark Hoyts</h1>
      <h2>Billboard</h2>
      </div>
      <div className="container">
        <MyNavbar />
        <div className="row">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              image={`${IMAGE_PATH}${movie.poster_path}`}
              h5={movie.title}
              txt={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
