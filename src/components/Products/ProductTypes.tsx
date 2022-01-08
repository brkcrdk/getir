import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProductTypes } from "api";
import { Badge } from "components";

const ProductTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const typeData = await fetchProductTypes();
      setTypes(typeData);
    };
    getProductTypes();
  }, []);

  return (
    <ProductTypesWrapper>
      {types.map((type) => (
        <Badge label={type} isActive={type === "mug"} />
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
