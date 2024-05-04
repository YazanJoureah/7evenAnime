import { Button, Form, InputGroup } from "react-bootstrap";
import "./Search.css";
import { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSearch(searchTerm); // Pass search term to parent component
  };

  return (
    <Form className="flex-fill" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          className="form-control"
          type="text" // Specify input type for accessibility
          name="search"
          placeholder="Search Anime"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          className="form-control search-btn"
          type="submit"
          variant="outline-secondary"
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default Search;
