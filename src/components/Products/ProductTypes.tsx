import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProductTypes } from "api";
import { Badge } from "components";
import { useChangeFilter } from "hooks";

const ProductTypes = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("mug");
  const { handleChangeFilter } = useChangeFilter();

  useEffect(() => {
    const getProductTypes = async () => {
      const typeData = await fetchProductTypes();
      setTypes(typeData);
    };
    getProductTypes();
  }, []);

  const handleChangeType = (type: string) => {
    handleChangeFilter({ itemType: type });
    setSelectedType(type);
  };

  return (
    <ProductTypesWrapper>
      {types.map((type) => (
        <Badge
          key={type}
          label={type}
          isActive={type === selectedType}
          onClick={() => handleChangeType(type)}
        />
      ))}
    </ProductTypesWrapper>
  );
};

export default ProductTypes;

const ProductTypesWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 8px;
`;
