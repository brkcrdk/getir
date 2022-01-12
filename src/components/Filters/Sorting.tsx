import { useState } from "react";
import { Radio } from "components";
import { useChangeFilter } from "hooks";

import FilterContainer from "./FilterContainer";

interface SortProps {
  _sort: "price" | "added";
  _order: "asc" | "desc";
}
interface SortTypes {
  label: string;
  id: string;
  sortOptions: SortProps;
}

const Sorting = () => {
  const [selectedSort, setSelected] = useState("price_asc");
  const { handleChangeFilter } = useChangeFilter();

  const handleChange = (selectedType: string, selectedSort: SortProps) => {
    handleChangeFilter(selectedSort);
    return setSelected(selectedType);
  };

  const sortTypes: SortTypes[] = [
    {
      label: "Price low to high",
      id: "price_asc",
      sortOptions: {
        _sort: "price",
        _order: "asc",
      },
    },
    {
      label: "Price high to low",
      id: "price_desc",
      sortOptions: {
        _sort: "price",
        _order: "desc",
      },
    },
    {
      label: "New to old",
      id: "added_asc",
      sortOptions: {
        _sort: "added",
        _order: "asc",
      },
    },
    {
      label: "Old to new",
      id: "time_desc",
      sortOptions: {
        _sort: "added",
        _order: "desc",
      },
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
