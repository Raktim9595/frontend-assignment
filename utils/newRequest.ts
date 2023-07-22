import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fakestoreapi.com/"
});

export default newRequest;