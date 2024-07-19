import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3e10ae65b69e4d94ae182b6fea9888c6",
  },
});


