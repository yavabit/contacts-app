import { groupContactsApi } from "./api";

export const groupContactsReducer = groupContactsApi.reducer;
export const groupContactsReducerPath = groupContactsApi.reducerPath;
export const groupContactsMiddleware = groupContactsApi.middleware;

export const { useGetGroupContactsQuery } = groupContactsApi
