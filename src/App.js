import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/card';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './Components/navbar';

const API_KEY = 'e495f4f525c1920bde468f49a9db71e8';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

function App() {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
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
      setMovies([]);
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (contentType === 'popular') {
          setMovies2(data.results);
          setMovies(data.results);
        } else {
          setMovies2(data.results || []);
          setMovies(data.results || []);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleContentChange = (contentType) => {
    setContent(contentType);
  };

  const searchMovie = (content) => {
    let copyMovies = movies2;
    let newMovies = [];
    copyMovies.forEach((item) => {
      if (item.title.includes(content)) {
        newMovies.push(item);
      }
    });
    setMovies(newMovies);
  };

  const handlePlayClick = () => {
    alert('Playing the movie');
  };

  const handleGenreChange = (selectedGenre) => {
    setMovies(movies.filter((movie) => movie.genre_ids.includes(selectedGenre)));
  };

  return (
    <div className='a'>
      <div className="two">
        <h1>
          Cinemark Hoyts
          <br></br>
          <span>Billboard</span>
        </h1>
      </div>
      <div className="container">
        <div className="showmovie">
          {selectedMovie && (
            <div className="overlay">
              <div className="popup">
                <div className="right">
                  <h2>{selectedMovie.title}</h2>
                  <div className="movie-details">
                    <p>{selectedMovie.overview}</p>
                    <div className="movie-actions">
                      <button
                        className="btn btn-primary"
                        onClick={handlePlayClick}
                      >
                        PLAY
                      </button>
                      <button
                        onClick={() => setSelectedMovie(null)}
                        className="btn btn-danger"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                  <img
                    src={`${IMAGE_PATH}${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                    className="imga"
                  />
                </div>
              </div>
            </div>
          )}
          <MyNavbar
            handleContentChange={handleContentChange}
            searchContent={searchMovie}
            handleGenreChange={handleGenreChange}
          />
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
    </div>
  );
}

export default App;
