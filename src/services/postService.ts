import { APIResponse, Result } from "../types/apiType";
import { Post } from "../types/postType";
import { baseURL } from "../constant";
import { getToken } from "./api";

const getAllPost = async () => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) throw new Error("Error fetch data");

    const data: APIResponse<Result<Post[]>> = await response.json();
    return data.results.data;
  } catch (error) {
    console.error("error fetch data: ", error);
    return [];
  }
};

export { getAllPost };
