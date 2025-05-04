import { contactsApi } from "./api";

export const contactsReducer = contactsApi.reducer;
export const contactsReducerPath = contactsApi.reducerPath;
export const contactsMiddleware = contactsApi.middleware;

export const {
    useGetContactsQuery,
} = contactsApi
