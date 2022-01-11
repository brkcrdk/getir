import { useState } from "react";
import { Radio } from "components";
import { useChangeFilter } from "hooks";

import FilterContainer from "./FilterContainer";

interface SortProps {
  type: "_sort" | "_order";
  value: "asc" | "desc" | "price" | "added";
}
interface SortTypes {
  label: string;
  id: string;
  sortOptions: SortProps[];
}

const Sorting = () => {
  const [selectedSort, setSelected] = useState("price_asc");
  const { handleChangeFilter } = useChangeFilter();

  const handleChange = (selectedType: string, selectedSort: SortProps[]) => {
    // selectedSort.forEach((sort) => handleChangeFilter(sort.type, sort.value));
    return setSelected(selectedType);
  };

  const sortTypes: SortTypes[] = [
    {
      label: "Price low to high",
      id: "price_asc",
      sortOptions: [
        {
          type: "_sort",
          value: "price",
        },
        { type: "_order", value: "asc" },
      ],
    },
    {
      label: "Price high to low",
      id: "price_desc",
      sortOptions: [
        { type: "_sort", value: "price" },
        { type: "_order", value: "desc" },
      ],
    },
    {
      label: "New to old",
      id: "added_asc",
      sortOptions: [
        { type: "_sort", value: "added" },
        { type: "_order", value: "asc" },
      ],
    },
    {
      label: "Old to new",
      id: "time_desc",
      sortOptions: [
        { type: "_sort", value: "added" },
        { type: "_order", value: "desc" },
      ],
    },
  ];

  return (
    <FilterContainer title="Sorting">
      {sortTypes.map((type) => (
        <Radio
          key={type.id}
          label={type.label}
          id={type.id}
          onChange={() => handleChange(type.id, type.sortOptions)}
          checked={selectedSort === type.id}
          radioType="sortTypes"
        />
      ))}
    </FilterContainer>
  );
};

export default Sorting;
