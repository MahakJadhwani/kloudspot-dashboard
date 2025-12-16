import axios from "axios";

const API_BASE_URL = "https://your-backend-url.com/api";

export const getDashboardData = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API_BASE_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
