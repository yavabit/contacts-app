import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsMiddleware, contactsReducerPath, contactsReducer } from "./contacts";
import { groupContactsReducerPath, groupContactsReducer, groupContactsMiddleware } from "./groupContacts";
import { favoriteReducer } from "./favoriteContacts";

const rootReducer = combineReducers({
	favorite: favoriteReducer,
	[contactsReducerPath]: contactsReducer,
	[groupContactsReducerPath]: groupContactsReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat([contactsMiddleware, groupContactsMiddleware]);
	},
});

export type RootState = ReturnType<typeof rootReducer>;
