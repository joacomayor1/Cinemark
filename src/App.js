import React, { useEffect, useState } from 'react';
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
      apiUrl = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`;
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
