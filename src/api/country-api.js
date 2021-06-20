import axios from "axios";
const instance = axios.create({
  baseURL: "https://restcountries.eu/rest/v2",
});

export async function getAll() {
  try {
    const res = await instance.get("all");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
