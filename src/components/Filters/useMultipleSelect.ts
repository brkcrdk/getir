import { useState, useEffect } from "react";

const useFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

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

  useEffect(() => {
    if (!selectedFilters.length) {
      setSelectedFilters(["All"]);
    }
  }, [selectedFilters]);

  return { onSelect, selectedFilters };
};

export default useFilter;
