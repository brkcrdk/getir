import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Radio } from "components";
import { actionTypes, StoreTypes } from "types";

import FilterContainer from "./FilterContainer";
const Sorting = () => {
  const [selectedSort, setSelected] = useState("price_asc");
  const dispatch = useDispatch();
  const { filters } = useSelector((s: StoreTypes) => s.productStore);

  const handleChange = (type: string) => {
    dispatch({
      type: actionTypes.productStore.UPDATE_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
          _sort: type,
        },
      },
    });
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
