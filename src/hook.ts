import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/index";

// Custom hook for dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook for selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;