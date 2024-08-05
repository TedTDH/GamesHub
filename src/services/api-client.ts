import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5687134741e6437ab2a6d6b3acda0446",
  },
});
