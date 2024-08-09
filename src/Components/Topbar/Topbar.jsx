/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { links } from "./links";
import Search from "./Search/Search";
import "./Topbar.css"; // Import your CSS file
import { Style } from "./TopbarStyle";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Topbar({ style }) {
  useEffect;
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor: "#19a2d0",
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 9,
        paddingTop: "20px",
        paddingBottom: "20px",
        opacity: style,
      }}
    >
      <Container className="navbar">
        <Navbar.Brand href="index.html" className="me-lg-5 me-0">
          <Image
            src="src/assets/Logo.png"
            alt="7even Anime"
            className="logo-image img-fluid"
            style={{ width: "120px", height: "auto" }}
          />
        </Navbar.Brand>

        <Search />

        <Navbar.Toggle
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          style={Style.Navbar_toggler}
        >
          <span
            className="navbar-toggler-icon"
            style={Style.navbar_toggler_icon}
          >
            <span style={Style.Span1}></span>
            <span style={Style.Span2}></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-auto">
            <Link to={"/Home"} className="nav-link p-3">
              Home
            </Link>

            <Link to={"/AnimeList"} className="nav-link p-3">
              Anime List
            </Link>

            <NavDropdown
              title="Pages"
              id="collapsible-nav-dropdown"
              className="nav-link"
              style={{ paddingBottom: "0" }}
            >
              {links.map((link, i) => (
                <NavDropdown.Item key={i} style={Style.Dropdown_item}>
                  <Link className="dropdown-item" to={link.href}>
                    {link.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="contact.html" className="nav-link p-3">
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-4">
            <button className="custom-btn" style={Style.Custom_btn}>
              Get started
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
