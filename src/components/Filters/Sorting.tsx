import { useState } from "react";
import { Radio } from "components";
import { useChangeFilter } from "hooks";

import FilterContainer from "./FilterContainer";
const Sorting = () => {
  const [selectedSort, setSelected] = useState("price_asc");
  const { handleChangeFilter } = useChangeFilter();

  const handleChange = (type: string) => {
    handleChangeFilter("_sort", type);
    return setSelected(type);
  };

  const sortTypes = [
    {
      label: "Price low to high",
      id: "price_asc",
    },
    {
      label: "Price high to low",
      id: "price_desc",
    },
    {
      label: "New to old",
      id: "time_asc",
    },
    {
      label: "Old to new",
      id: "time_desc",
    },
  ];

  return (
    <FilterContainer title="Sorting">
      {sortTypes.map((type) => (
        <Radio
          key={type.id}
          label={type.label}
          id={type.id}
          onChange={() => handleChange(type.id)}
          checked={selectedSort === type.id}
          radioType="sortTypes"
        />
      ))}
    </FilterContainer>
  );
};

export default Sorting;
