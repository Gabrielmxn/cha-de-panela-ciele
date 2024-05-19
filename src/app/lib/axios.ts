import axios from "axios";

export const api = axios.create({
  baseURL: "https://cha-da-ciele-back.onrender.com"
})