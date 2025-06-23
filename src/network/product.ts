import {loadingProducts, getallproducts, productsStatus } from "../store/reducer/products";
import type { AppDispatch } from "../store";

export const getProducts = () => async (
  dispatch: AppDispatch
) => {
  dispatch(loadingProducts());
  try {
    const response = await fetch("http://localhost:3000/api/v1/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    console.log("Login successful:", data);
    dispatch(getallproducts(data)); // Dispatch success action with user data
  } catch (error: any) {
    console.log("Error fetching products:", error.message);
    dispatch(productsStatus(error.message)); // Dispatch failure action with error message
  }
};