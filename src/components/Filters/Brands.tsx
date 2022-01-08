import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchBrands } from "api";
import FilterContainer from "./FilterContainer";

const Brands = () => {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const getBrands = async () => {
      const brandResponse = await fetchBrands();
      const brandData = ["All"].concat(brandResponse);
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
          // onChange={() => console.log(brand)}
          checked={brand === "All"}
        />
      ))}
    </FilterContainer>
  );
};

export default Brands;
