import axios from "axios";


export const generateGraph = async (transcript: string) => {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api/transcript";
  

  const res = await axios.post(BASE_URL, {
    transcript,
  });
  return res.data;
};
