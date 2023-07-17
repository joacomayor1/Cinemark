import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import "../App.css";

const API_KEY = "e495f4f525c1920bde468f49a9db71e8";
const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

export default function MyNavbar({ handleContentChange, searchContent, handleGenreChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleClick = (content) => {
    handleContentChange(content);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    searchContent(searchTerm);
    console.log("Searching:", searchTerm);
  };

  const handleGenreSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedGenre(selectedValue);
    handleGenreChange(selectedValue);
  };
  

  useEffect(() => {
    if (selectedGenre) {
      fetchMovieByGenre(selectedGenre);
    }
  }, [selectedGenre]);

  const fetchMovieByGenre = (genreId) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies by genre:", data.results);
        const movies = data.results;
        // Actualizar el estado de las películas en el componente padre
        handleGenreChange(movies);
      })
      .catch((error) => {
        console.error("Error getting movies by genre:", error);
      });
  };

  const genreOptions = [
    { value: "28", label: "Action" },
    { value: "35", label: "Comedy" },
    { value: "27", label: "Horror" },
    { value: "12", label: "Adventure" },
    { value: "80", label: "Crime" },
    { value: "18", label: "Drama" },
    { value: "99", label: "Documentary" },
    { value: "53", label: "Thriller" },
    { value: "878", label: "Science Fiction" },
  ];

  genreOptions.sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Navbar
      bg="black"
      variant="dark"
      expand="lg"
      className="nav-bar-center"
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "15px",
      }}
    >
      <Nav className="nav-bar-center">
        <Form inline>
          <FormControl
            as="select"
            value={selectedGenre}
            onChange={handleGenreSelect}
            style={{backgroundColor:"black",
              color: "white",
              borderRadius: "15px"}}
          >
            <option value="">All Genres</option>
            {genreOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormControl>
        </Form>
        <Button
          onClick={() => handleClick("movies")}
          variant="link"
          className="bar btn-outline-light"
          href="#Movies"
          style={{ textDecoration: "none" }}
        >
          Movies
        </Button>
        <Button
          onClick={() => handleClick("tv")}
          variant="link"
          className="bar btn-outline-light"
          href="#tvPrograms"
          style={{ textDecoration: "none" }}
        >
          TV Programs
        </Button>
        <Button
          onClick={() => handleClick("popular")}
          variant="link"
          className="bar btn-outline-light"
          href="#Populars"
          style={{ textDecoration: "none" }}
        >
          Populars
        </Button>
        <input
          className="search-input"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        ></input>
        <Button className="search-button" onClick={handleSearchSubmit} style={{borderRadius:"10px", backgroundColor:"black", color:"white",height: "35px"}}>
          Search
        </Button>
      </Nav>
    </Navbar>
  );
}
