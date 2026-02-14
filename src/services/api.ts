import axios from "axios";

export const generateGraph = async (transcript: string) => {
  const res = await axios.post("http://localhost:8080/api/transcript", {
    transcript,
  });
  return res.data;
};
