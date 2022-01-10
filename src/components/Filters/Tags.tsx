import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, NothingFound } from "components";
import { fetchTags } from "api";
import { actionTypes, StoreTypes } from "types";

import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";
import useMultipleSelect from "./useMultipleSelect";

const Brands = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { onSelect, selectedFilters, handleSearch, searchResults } =
    useMultipleSelect(tags);
  const dispatch = useDispatch();
  const { filters } = useSelector((s: StoreTypes) => s.productStore);

  useEffect(() => {
    const getTags = async () => {
      const tagResponse = await fetchTags();
      const tagData = ["All"].concat(tagResponse);
      setTags(tagData);
      setLoading(false);
    };
    getTags();
  }, []);

  useEffect(() => {
    const filterAll = selectedFilters.filter((tag) => tag !== "All");
    dispatch({
      type: actionTypes.productStore.UPDATE_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
          tags_like: filterAll,
        },
      },
    });
  }, [selectedFilters]);

  const renderResults = searchResults.length ? (
    searchResults.map((tag) => (
      <Checkbox
        key={tag}
        label={tag}
        id={tag}
        checkboxType="tags"
        onChange={() => onSelect(tag)}
        checked={selectedFilters.includes(tag)}
      />
    ))
  ) : (
    <NothingFound />
  );

  return (
    <FilterContainer
      title="Tags"
      searchPlaceholder="Search tag.."
      searchable
      onSearch={handleSearch}
    >
      {loading ? <LoadingFilter /> : renderResults}
    </FilterContainer>
  );
};

export default Brands;
