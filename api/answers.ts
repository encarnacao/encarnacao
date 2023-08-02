import { AnswerResponse } from "@/interfaces";
import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getAnswer(id:number): Promise<AnswerResponse> {
  try {
    const response = await axios.get(`/answers/${id}`);
    return response.data;
  } catch {
    return { id: -1, answer: "Error: Answer not found." };
  }
}
