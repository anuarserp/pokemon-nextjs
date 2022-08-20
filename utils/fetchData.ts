const fetchData = async (api: string) => {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data);
};
export default fetchData;
