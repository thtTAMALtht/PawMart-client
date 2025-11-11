import axios from "axios";
const instance = axios.create({
  baseURL: "https://paw-mart-server-sigma.vercel.app",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
