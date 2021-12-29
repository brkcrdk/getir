const fetchBrands = async () => {
  const request = await fetch(
    `${process.env.REACT_APP_MAIN_URL}/product_types`
  );
  return await request.json();
};

export default fetchBrands;
