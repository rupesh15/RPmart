import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  loading: boolean;
  error: string | null;
  products: object | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  products: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadingProducts(state) {
      state.loading = true;
      state.error = null;
    },
    getallproducts(state, action: PayloadAction<any>) {
      state.loading = false;
      state.products = action.payload;
    },
    productsStatus(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadingProducts, getallproducts, productsStatus } = authSlice.actions;
export default authSlice.reducer;


