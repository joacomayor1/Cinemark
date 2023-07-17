import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../App.css"

export default function MyNavbar({ handleContentChange }) {
  const handleClick = (content) => {
    handleContentChange(content);
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" className="nav-bar-center" style={{display:"flex",justifyContent:"center", borderRadius:"15px"}}>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav nav-bar-center" />
      <Navbar.Collapse id="basic-navbar-nav nav-bar-center"> */}
        <Nav className="nav-bar-center">
          <Button
            onClick={() => handleClick("movies")}
            variant="link"
            className="bar"
            href="#Movies"
          >
            Movies
          </Button>
          <Button
            onClick={() => handleClick("tv")}
            variant="link"
            className="bar"
            href="#tvPrograms"
          >
            TV Programs{" "}
          </Button>
          <Button
            onClick={() => handleClick("popular")}
            variant="link"
            className="bar"
            href="#Populars"
          >
            Populars
          </Button>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}
