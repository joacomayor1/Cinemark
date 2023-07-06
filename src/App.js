import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './Components/navbar';

const API_KEY = 'e495f4f525c1920bde468f49a9db71e8';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function App() {
  const [movies, setMovies] = useState([]);
  const [content, setContent] = useState('movies');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies(content);
  }, [content]);

  const fetchMovies = (contentType) => {
    let apiUrl = '';

    if (contentType === 'movies') {
      apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    } else if (contentType === 'tv') {
      apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
    } else if (contentType === 'popular') {
      apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
      setMovies([]); // clean the movies to show the most populars
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (contentType === 'popular') {
          setMovies(data.results);
        } else {
          setMovies(data.results || []);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleContentChange = (contentType) => {
    setContent(contentType);
  };

  const handlePlayClick = () => {
    console.log('The usser click PLAY');
  };

  return (
    <div>
      <div className='titles'>
        <h1>Cinemark Hoyts</h1>
        <h2>Billboard</h2>
      </div>
      <div className="container">
      <div className='showmovie'>
      {selectedMovie && (
        <div className="overlay">
          <div className="popup">
            <img
              src={`${IMAGE_PATH}${selectedMovie.poster_path}`}
              alt={selectedMovie.title}
              style={{ maxWidth: '50%' }}
            />
            <div className='right'>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            <button className="btn btn-primary" onClick={handlePlayClick}>
              PLAY
            </button>
            <button
              onClick={() => setSelectedMovie(null)}
              className="btn btn-secondary"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
      </div>
        <MyNavbar handleContentChange={handleContentChange} />
        <div className="row">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              image={`${IMAGE_PATH}${movie.poster_path}`}
              h5={movie.title}
              txt={movie.overview}
              setSelectedMovie={setSelectedMovie}
              movie={movie}
            />
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default App;
