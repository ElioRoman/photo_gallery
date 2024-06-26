import axios from "axios";

const API_URL = "https://api.unsplash.com";
const ACCESS_KEY = "IWGyN24FIlwsAWS5KyWlpU4tU_lzzpBsrrXJG4SDWjk";

export const fetchPhotos = (query: string, page: number) => {
  const url = query !== "" ? `${API_URL}/search/photos` : `${API_URL}/photos`;

  return axios.get(url, {
    params: {
      query: query || undefined,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
};
