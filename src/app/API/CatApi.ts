import axios from "axios";

const apiKey =
  "live_pvRv6ETPgfooOxrw1m4yBMz5AKbFAIKLJDjWQRRkXbSxjYAAKYAaafmWpOlplfri";
const baseUrl = "https://api.thecatapi.com/v1";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["x-api-key"] = apiKey;

export const getRandomCat = async () => {
  const { data } = await axios.get("/images/search");
  return data;
};

export const getSomeCats = async ({ breed, limit = 10 }) => {
  console.log(breed, limit);
  const string = breed
    ? `/images/search?limit=${limit}&breed_ids=${breed}`
    : `/images/search?limit=${limit}`;
  const { data } = await axios.get(string);
  return data;
};

export const getCatById = async (image_id) => {
  const { data } = await axios.get(`/images/${image_id}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await axios.get("/categories");
  return data;
};

export const getBreeds = async () => {
  const { data } = await axios.get("/breeds");
  return data;
};
