import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchTags } from "api";
import FilterContainer from "./FilterContainer";

const Brands = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const getTags = async () => {
      const tagResponse = await fetchTags();
      const tagData = ["All"].concat(tagResponse);
      setTags(tagData);
    };
    getTags();
  }, []);

  return (
    <FilterContainer title="Tags" searchable>
      {tags.map((tag) => (
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
