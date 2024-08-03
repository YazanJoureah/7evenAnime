import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SelectSearch from "react-select-search";
import { genres } from "./genres";
import { types } from "./types";
import "react-select-search/style.css";
import "./filtersForm.css";

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});

  const [showFilters, setShowFilters] = useState(false);

  let filterData = {
    genres,
    types,
    years: [],
  };

  const handleInputChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (selectedOptions, name) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedOptions,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSearchParams(filters);
  };

  const toggleFilters = () => {
    setTimeout(() => {
      setShowFilters(!showFilters);
    }, 10);
  };

  // Generate years array for the dropdown
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    filterData.years = Array.from(
      { length: 100 },
      (_, index) => currentYear - index
    );
  }, []);

  return (
    <div>
      <button onClick={toggleFilters} className="toggle-filters-button">
        Show Filters
      </button>

      {showFilters && (
        <div className={`filters-container ${showFilters ? "show" : "hide"}`}>
          <form onSubmit={submit} className="filters-form">
            <div className="grid-container">
              <div className="page-container">
                <label htmlFor="page">Page</label>
                <input
                  type="number"
                  id="page"
                  name="page"
                  value={filters.page}
                  min={0}
                  onChange={handleInputChange}
                />
              </div>
              <div className="limit-container">
                <label htmlFor="limit">Limit</label>
                <input
                  type="number"
                  id="limit"
                  name="limit"
                  value={filters.limit}
                  min={0}
                  onChange={handleInputChange}
                />
              </div>
              <div className="rating-container">
                <label htmlFor="minRating">Minimum Rating</label>
                <input
                  type="number"
                  id="minRating"
                  name="minRating"
                  value={filters.minRating}
                  min={0}
                  max={10}
                  onChange={handleInputChange}
                />
                <label htmlFor="maxRating">Maximum Rating</label>
                <input
                  type="number"
                  id="maxRating"
                  name="maxRating"
                  value={filters.maxRating}
                  min={1}
                  max={10}
                  onChange={handleInputChange}
                />
              </div>
              <div className="year-container">
                <label htmlFor="years">Release Year</label>
                <select
                  id="years"
                  name="years"
                  value={filters.years}
                  onChange={handleInputChange}
                >
                  <option value="">All</option>
                  {filterData.years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="type-container">
                <label htmlFor="type">Type</label>
                <SelectSearch
                  id="type"
                  options={filterData.types}
                  placeholder="All"
                  multiple
                  search
                  value={filters.type}
                  onChange={(selectedOptions) =>
                    handleSelectChange(selectedOptions, "type")
                  }
                  custom={{
                    control: (props) => (
                      <div className="select-search-control" {...props} />
                    ),
                    menu: (props) => (
                      <div className="select-search-menu" {...props} />
                    ),
                    option: (props) => (
                      <div className="select-search-option" {...props} />
                    ),
                  }}
                />
              </div>
              <div className="genres-container">
                <label htmlFor="genres">Genre</label>
                <SelectSearch
                  id="genres"
                  options={filterData.genres}
                  placeholder="All"
                  multiple
                  search
                  value={filters.genres}
                  onChange={(selectedOptions) =>
                    handleSelectChange(selectedOptions, "genres")
                  }
                  custom={{
                    control: (props) => (
                      <div className="select-search-control" {...props} />
                    ),
                    menu: (props) => (
                      <div className="select-search-menu" {...props} />
                    ),
                    option: (props) => (
                      <div className="select-search-option" {...props} />
                    ),
                  }}
                />
              </div>
              <button type="submit" className="filter-button">
                Filter
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Filters;
