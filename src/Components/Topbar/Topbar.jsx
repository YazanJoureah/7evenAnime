import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { links } from "./links";
import Search from "./Search/Search";
import "./Topbar.css"; // Import your CSS file
import { Style } from "./TopbarStyle";
export default function Topbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar"
      style={Style.Navbar}
    >
      <Container>
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
            <Nav.Link href="index.html" className="nav-link p-3">
              Home
            </Nav.Link>

            <Nav.Link href="about.html" className="nav-link p-3">
              About
            </Nav.Link>

            <NavDropdown
              title="Pages"
              id="collapsible-nav-dropdown"
              className="nav-link"
              style={{ paddingBottom: "0" }}
            >
              {links.map((link, i) => (
                <NavDropdown.Item
                  href={link.href}
                  key={i}
                  className="dropdown-item"
                  style={Style.Dropdown_item}
                >
                  {link.name}
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

/*
**Explanation:**

- **Inline Styles:** The CSS rules from your original CSS are directly applied to the JSX elements as inline styles using the `style` attribute. This provides granular control over individual elements.
- **CSS Variables:**  The code uses CSS variables (e.g., `var(--white-color)`, `var(--border-radius-large)`) to keep styles consistent and maintainable. Make sure you define these variables in your CSS file.
- **Structure:** The JSX structure mirrors the original HTML structure, making it easier to understand how the code relates to the design.

**Important Considerations:**

- **CSS Organization:**  You should ideally separate your CSS into different files for different components or sections.  This helps you keep your code organized and maintainable.
- **CSS Preprocessors:**  For larger projects, consider using CSS preprocessors like Sass or Less, which allow you to write more modular and reusable CSS.
- **CSS-in-JS Libraries:**  There are dedicated libraries for writing CSS directly within your JavaScript code (e.g., styled-components, emotion). These libraries provide benefits such as dynamic styling and better organization.

Remember to adapt the CSS values (like `var(--white-color)`) to match your project's design system. 
*/
