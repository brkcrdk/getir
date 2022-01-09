import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchTags } from "api";
import FilterContainer from "./FilterContainer";
import LoadingFilter from "./LoadingFilter";
import useMultipleSelect from "./useMultipleSelect";

const Brands = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { onSelect, selectedFilters } = useMultipleSelect();

  useEffect(() => {
    const getTags = async () => {
      const tagResponse = await fetchTags();
      const tagData = ["All"].concat(tagResponse);
      setTags(tagData);
      setLoading(false);
    };
    getTags();
  }, []);

  return (
    <FilterContainer title="Tags" searchPlaceholder="Search tag.." searchable>
      {loading ? (
        <LoadingFilter />
      ) : (
        tags.map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            id={tag}
            checkboxType="tags"
            onChange={() => onSelect(tag)}
            checked={selectedFilters.includes(tag)}
          />
        ))
      )}
    </FilterContainer>
  );
};

export default Brands;
