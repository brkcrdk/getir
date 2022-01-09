import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchBrands } from "api";
import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";
import useMultipleSelect from "./useMultipleSelect";

const Brands = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { onSelect, selectedFilters, handleSearch, searchResults } =
    useMultipleSelect(brands);

  useEffect(() => {
    const getBrands = async () => {
      const brandResponse = await fetchBrands();
      const brandData = ["All"].concat(brandResponse);
      setBrands(brandData);
      setLoading(false);
    };
    getBrands();
  }, []);

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
    <span>No result</span>
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
