import { loginStart, loginSuccess, loginFailure } from "../store/reducer/loginauth";
import type { AppDispatch } from "../store";

export const loginUser = (email: string, password: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(loginStart());
  try {
    const response = await fetch("http://localhost:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    console.log("Login successful:", data);
    dispatch(loginSuccess(data)); // Dispatch success action with user data
  } catch (error: any) {
    dispatch(loginFailure(error.message)); // Dispatch failure action with error message
  }
};