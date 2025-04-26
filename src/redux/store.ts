import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer } from "./contactsReducer";
import { groupContactsReducer } from "./groupContactsReducer";
import { favoriteReducer } from "./favoriteReducer";
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
      contacts: contactsReducer,
      favorite: favoriteReducer,
      groupContacts: groupContactsReducer,
})

//@ts-expect-error
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>;
