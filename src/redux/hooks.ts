import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./store";
import { UnknownAction } from "redux";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, UnknownAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>
