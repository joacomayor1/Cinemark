import React, { useState } from "react";
import { Navbar, Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import "../App.css";

export default function MyNavbar({ handleContentChange, searchContent }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (content) => {
    handleContentChange(content);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    searchContent(searchTerm)
    console.log("Searching:", searchTerm);
  };

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
        <Button
          onClick={() => handleClick("movies")}
          variant="link outline-light"
          className="bar btn"
          href="#Movies"
          style={{ textDecoration: "none" }}
        >
          Movies
        </Button>
        <Button
          onClick={() => handleClick("tv")}
          variant="link outline-light"
          className="bar btn"
          href="#tvPrograms"
          style={{ textDecoration: "none" }}
        >
          TV Programs{" "}
        </Button>
        <Button
          onClick={() => handleClick("popular")}
          variant="link outline-light"
          className="bar btn"
          href="#Populars"
          style={{ textDecoration: "none" }}
        >
          Populars
        </Button>
        <input className="search-input" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}>
        </input>
        <Button className="btn-outline-secondary" onClick={handleSearchSubmit}>Search</Button>
      </Nav>
    </Navbar>
  );
}
