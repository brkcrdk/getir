import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchTags } from "api";
import FilterContainer from "./FilterContainer";
import FilterSkeleton from "./FilterSkeleton";

const Brands = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTags = async () => {
      const tagResponse = await fetchTags();
      const tagData = ["All"].concat(tagResponse);
      setTags(tagData);
      setLoading(false);
    };
    getTags();
  }, []);

  const renderLoading = [...Array(4).fill(0)].map((_, i: number) => (
    <FilterSkeleton key={`product-skeleton-${i}`} />
  ));

  return (
    <FilterContainer title="Tags" searchable>
      {loading
        ? renderLoading
        : tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              id={tag}
              checkboxType="tags"
              onChange={() => console.log(tag)}
              checked={tag === "All"}
            />
          ))}
    </FilterContainer>
  );
};

export default Brands;
