import { loginStart, loginSuccess, loginFailure } from "../store/reducer/loginauth";
import type { AppDispatch } from "../store";

export const signup = (name: string, email: string, password: string, passwordConfirm: string) => async (
  dispatch: AppDispatch
) => {
  dispatch(loginStart());
  try {
    const response = await fetch("http://localhost:3000/api/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, password, passwordConfirm }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }
     
    const data = await response.json();
    alert("Signup successful! Please login now.");
    
    dispatch(loginSuccess(data)); 
  } catch (error: any) {
    dispatch(loginFailure(error.message));
  }
};