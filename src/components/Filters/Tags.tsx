import { useEffect, useState } from "react";
import { Checkbox, NothingFound } from "components";
import { fetchTags } from "api";
import { useChangeFilter, useMultipleSelect } from "hooks";

import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";

const Brands = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { onSelect, selectedFilters, handleSearch, searchResults } =
    useMultipleSelect(tags);

  const { handleChangeFilter } = useChangeFilter();
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
    handleChangeFilter("tags_like", filterAll);
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
