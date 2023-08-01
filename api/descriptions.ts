import { DescriptionResponse } from "@/interfaces";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getDescriptions(): Promise<DescriptionResponse[]> {
  try {
    const response = await axios.get("/descriptions");
    return response.data;
  } catch {
    return [];
  }
}
