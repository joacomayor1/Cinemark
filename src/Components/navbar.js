import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../App.css"

export default function MyNavbar({ handleContentChange }) {
  const handleClick = (content) => {
    handleContentChange(content);
  };

  return (
    <Navbar bg="black" variant="dark" expand="lg" className="nav-bar-center" style={{display:"flex",justifyContent:"center", borderRadius:"15px"}}>
        <Nav className="nav-bar-center">
          <Button
            onClick={() => handleClick("movies")}
            variant="link"
            className="bar btn"
            href="#Movies"
            style={{textDecoration:"none"}}
          >
            Movies
          </Button>
          <Button
            onClick={() => handleClick("tv")}
            variant="link"
            className="bar btn"
            href="#tvPrograms"
            style={{textDecoration:"none", }}
          >
            TV Programs{" "}
          </Button>
          <Button
            onClick={() => handleClick("popular")}
            variant="link"
            className="bar btn"
            href="#Populars"
            style={{textDecoration:"none"}}
          >
            Populars
          </Button>
        </Nav>
    </Navbar>
  );
}
