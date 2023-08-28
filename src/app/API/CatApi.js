import axios from "axios";

const apiKey =
  "live_pvRv6ETPgfooOxrw1m4yBMz5AKbFAIKLJDjWQRRkXbSxjYAAKYAaafmWpOlplfri";
const baseUrl = "https://api.thecatapi.com/v1";
const subId = "Loki";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["x-api-key"] = apiKey;

export const getRandomCat = async () => {
  const { data } = await axios.get("/images/search");
  return data;
};

export const getBreedCats = async ({ breed, limit = 10, order }) => {
  const string = breed
    ? `/breeds?limit=${limit}&breed_ids=${breed}&order=${order}`
    : `/breeds?limit=${limit}&order=${order}`;
  const { data } = await axios.get(string);
  return data;
};

export const getCatsImgByBreed = async (breedId) => {
  const { data } = await axios.get(
    `/images/search?breed_ids=${breedId}&limit=5`
  );
  return data;
};

export const getCatsImgForGalery = async ({
  breed,
  limit = 5,
  order = "random",
  type = "static",
}) => {
  const string = breed
    ? `/images/search?breed_ids=${breed}&limit=${limit}&order=${order}mime_types=${type}`
    : `/images/search?limit=${limit}&order=${order}mime_types=${type}`;
  const { data } = await axios.get(string);
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

export const addFavourites = async (imageId) => {
  const payload = { image_id: imageId, sub_id: subId };
  const { data } = await axios.post("/favourites", payload);
  return data;
};

export const addVotes = async (voteObj) => {
  const payload = { ...voteObj, sub_id: subId };
  const { data } = await axios.post("/votes", payload);
  return data;
};

export const getFavourites = async () => {
  const { data } = await axios.get(`/favourites?sub_id=${subId}`);
  return data;
};

export const getVotes = async () => {
  const { data } = await axios.get(`/votes?sub_id=${subId}`);
  return data;
};

export const removeFavourites = async (id) => {
  const { data } = await axios.delete(`/favourites/${id}`);
  return data;
};

export const removeVotes = async (id) => {
  const { data } = await axios.delete(`/votes/${id}`);
  return data;
};
