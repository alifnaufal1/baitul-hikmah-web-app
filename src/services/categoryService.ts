import { baseURL } from "../constant";
import { APIResponse, Result } from "../types/apiType";
import { Category } from "../types/categoryType";
import { getToken } from "./api";

const getAllCategory = async () => {
  try {
    const response = await fetch(`${baseURL}/categories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (!response.ok) throw new Error("error fetch categories");

    const data: APIResponse<Result<Category[]>> = await response.json();
    return data.results.data;
  } catch (error) {
    console.error("error fetch categories: ", error);
    return [];
  }
};

export { getAllCategory };
