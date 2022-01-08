import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "types";
import { Header, Container, Filters, Basket, Products } from "components";

interface StateType {
  productStore: {
    filters: {
      _limit: number;
      _page: number;
    };
  };
}

function App() {
  const { filters } = useSelector((s: StateType) => s.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actionTypes.productStore.FETCH_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
        },
      },
    });
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <Filters />
        <Products />
        <Basket />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled(Container)`
  margin-top: 38px;
  margin-bottom: 100px;
  display: flex;
`;
