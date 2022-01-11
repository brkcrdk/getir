import { useState, useEffect, ChangeEvent } from "react";

const useFilter = (initialState: string[]) => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setResults] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchVal) {
      const filteredTags = initialState.filter((state) =>
        state.toLowerCase().includes(searchVal)
      );
      setResults(filteredTags);
    } else {
      setResults(initialState);
    }
  }, [searchVal, initialState]);

  // If selectedOpt is selected already remove it from selectedFilters
  // If all selected remove all other options and set all selected
  // else add selectedOpt to selectedFilters and remove all from selectedFilters
  const onSelect = (selectedOpt: string) => {
    const isSelected = selectedFilters.includes(selectedOpt);
    if (isSelected) {
      const filteredBrands = selectedFilters.filter(
        (opt) => opt !== selectedOpt
      );
      setSelectedFilters(filteredBrands);
    } else if (selectedOpt === "All") {
      setSelectedFilters(["All"]);
    } else {
      const updatedBrands = selectedFilters.concat(selectedOpt);
      const filterAll = updatedBrands.filter((opt) => opt !== "All");
      setSelectedFilters(filterAll);
    }
  };

  // If nothing is selected, set all selected
  useEffect(() => {
    if (!selectedFilters.length) {
      setSelectedFilters(["All"]);
    }
  }, [selectedFilters]);

  return { onSelect, selectedFilters, handleSearch, searchResults };
};

export default useFilter;
