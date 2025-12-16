import axios from "axios";

const API_BASE_URL = "https://your-backend-url.com/api";

export const getCrowdEntries = async (page) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_BASE_URL}/crowd-entries?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
