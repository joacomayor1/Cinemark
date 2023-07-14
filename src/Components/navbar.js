import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function MyNavbar({ handleContentChange }) {
  const handleClick = (content) => {
    handleContentChange(content);
  };

  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
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
      </Navbar.Collapse>
    </Navbar>
  );
}
