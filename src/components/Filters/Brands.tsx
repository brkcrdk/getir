import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchBrands } from "api";
import FilterContainer from "./FilterContainer";
import FilterSkeleton from "./FilterSkeleton";

const Brands = () => {
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

  const renderLoading = [...Array(4).fill(0)].map((_, i: number) => (
    <FilterSkeleton key={`product-skeleton-${i}`} />
  ));

  return (
    <FilterContainer title="Brands" searchable>
      {loading
        ? renderLoading
        : brands.map((brand) => (
            <Checkbox
              key={brand}
              label={brand}
              id={brand}
              checkboxType="brands"
              onChange={() => console.log(brand)}
              checked={brand === "All"}
            />
          ))}
    </FilterContainer>
  );
};

export default Brands;
