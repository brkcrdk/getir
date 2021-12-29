import { Checkbox } from "components";
import FilterContainer from "./FilterContainer";
const Brands = () => {
  const brandsTest = [
    {
      label: "All",
      id: "all",
    },
    {
      label: "Deneme",
      id: "deneme",
    },
  ];

  return (
    <FilterContainer title="Brands">
      {brandsTest.map((brand) => (
        <Checkbox
          key={brand.id}
          label={brand.label}
          id={brand.id}
          checkboxType="brands"
          onChange={() => console.log(brand)}
          checked={brand.id === "all"}
        />
      ))}
      {/* <Checkbox
        label="All"
        id="all"
        checkboxType="brands"
        onChange={() => console.log("x")}
        checked
      /> */}
    </FilterContainer>
  );
};

export default Brands;
