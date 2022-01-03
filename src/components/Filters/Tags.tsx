import { useEffect, useState } from "react";
import { Checkbox } from "components";
import { fetchTags } from "api";
import FilterContainer from "./FilterContainer";

const Brands = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const tagData = await fetchTags();
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
          checked={tag === "all"}
        />
      ))}
    </FilterContainer>
  );
};

export default Brands;
