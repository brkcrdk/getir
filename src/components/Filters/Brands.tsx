import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchBrands } from "api";
import FilterContainer from "./FilterContainer";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      const brandData = await fetchBrands();
      setBrands(brandData);
    };
    getBrands();
  }, []);

  return (
    <FilterContainer title="Brands" searchable>
      {brands.map((brand) => (
        <Checkbox
          key={brand}
          label={brand}
          id={brand}
          checkboxType="brands"
          onChange={() => console.log(brand)}
          checked={brand === "all"}
        />
      ))}
    </FilterContainer>
  );
};

export default Brands;
