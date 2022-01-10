import { useEffect, useState } from "react";
import { Checkbox, NothingFound } from "components";
import { fetchBrands } from "api";
import { useChangeFilter } from "hooks";

import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";
import useMultipleSelect from "./useMultipleSelect";

const Brands = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { onSelect, selectedFilters, handleSearch, searchResults } =
    useMultipleSelect(brands);

  const { handleChangeFilter } = useChangeFilter();

  useEffect(() => {
    const getBrands = async () => {
      const brandResponse = await fetchBrands();
      const brandData = ["All"].concat(brandResponse);
      setBrands(brandData);
      setLoading(false);
    };
    getBrands();
  }, []);

  useEffect(() => {
    const filterAll = selectedFilters.filter((brand) => brand !== "All");
    handleChangeFilter("manufacturer_like", filterAll);
  }, [selectedFilters]);

  const renderResults = searchResults.length ? (
    searchResults.map((brand) => (
      <Checkbox
        key={brand}
        label={brand}
        id={brand}
        checkboxType="brands"
        onChange={() => onSelect(brand)}
        checked={selectedFilters.includes(brand)}
      />
    ))
  ) : (
    <NothingFound />
  );

  return (
    <FilterContainer
      title="Brands"
      searchPlaceholder="Search brand.."
      searchable
      onSearch={handleSearch}
    >
      {loading ? <LoadingFilter /> : renderResults}
    </FilterContainer>
  );
};

export default Brands;
