import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchBrands } from "api";
import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";
import useMultipleSelect from "./useMultipleSelect";

const Brands = () => {
  const { onSelect, selectedFilters } = useMultipleSelect();
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBrands = async () => {
      const brandResponse = await fetchBrands();
      const brandData = ["All"].concat(brandResponse);
      setBrands(brandData);
      setLoading(false);
    };
    getBrands();
  }, []);

  return (
    <FilterContainer
      title="Brands"
      searchPlaceholder="Search brand.."
      searchable
    >
      {loading ? (
        <LoadingFilter />
      ) : (
        brands.map((brand) => (
          <Checkbox
            key={brand}
            label={brand}
            id={brand}
            checkboxType="brands"
            onChange={() => onSelect(brand)}
            checked={selectedFilters.includes(brand)}
          />
        ))
      )}
    </FilterContainer>
  );
};

export default Brands;
