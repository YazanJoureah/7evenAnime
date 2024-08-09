import { useState } from "react";
import SelectSearch from "react-select-search";
import "./MultiChoiceBar.css";

export default function MultiChoiceBar({ choices, onSeasonChange }) {
  const [selectedChoices, setSelectedChoices] = useState({});

  const handleSelectChange = (selectedOptions, year) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [year]: selectedOptions,
    }));

    // Call the onSeasonChange function with the chosen season and year
    if (onSeasonChange) {
      onSeasonChange({ year: year, season: selectedOptions });
    }
  };

  return (
    <div className="banner">
      {choices?.data?.map((choice, i) => (
        <div
          key={i}
          className={`year-group ${
            selectedChoices[choice.year] && selectedChoices[choice.year]
          }`}
        >
          <div className="year-label">Year {choice.year}</div>
          <SelectSearch
            className="MultiChoiceBar"
            id={`MultiChoice-${choice.year}`}
            options={choice.seasons.map((season) => ({
              value: season,
              name: season,
            }))}
            placeholder="All"
            value={selectedChoices[choice.year] || []}
            onChange={(selectedOptions) =>
              handleSelectChange(selectedOptions, choice.year)
            }
          />
        </div>
      ))}
    </div>
  );
}
