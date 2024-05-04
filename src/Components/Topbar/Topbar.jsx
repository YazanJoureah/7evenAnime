import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { links } from "./links";
import "./Topbar.css";
import Search from "./Search/Search";

export default function Topbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container className="container">
        <Navbar.Brand href="index.html" className="me-lg-5 me-0">
          <Image
            src="src/assets/Logo.png"
            alt="7even Anime"
            className="logo-image img-fluid"
          />
        </Navbar.Brand>

        <Search />

        <Navbar.Toggle
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navbarNav">
          <Nav className=" ms-lg-auto">
            <Nav.Link className="nav-link" href="index.html">
              Home
            </Nav.Link>

            <Nav.Link className="nav-link" href="about.html">
              About
            </Nav.Link>

            <NavDropdown
              className="nav-link "
              title="Pages"
              id="collapsible-nav-dropdown"
            >
              {links.map((link, i) => {
                return (
                  <>
                    <NavDropdown.Item
                      class="dropdown-item"
                      href={link.href}
                      key={i}
                    >
                      {link.name}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </>
                );
              })}
            </NavDropdown>

            <Nav.Link className="nav-link" href="contact.html">
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-4">
            <button className=" custom-btn ">Get started</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
