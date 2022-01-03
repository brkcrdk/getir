const fetchTags = async () => {
  const request = await fetch(`${process.env.REACT_APP_MAIN_URL}/tags`);
  return await request.json();
};

export default fetchTags;
