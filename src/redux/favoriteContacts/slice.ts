import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ContactDto } from "src/types/dto/ContactDto";
import { contactsApi } from "../contacts/api";

interface InitialState {
    data: ContactDto[];
}

const initialState: InitialState = {
    data: [],
}

export const favoriteSlice = createSlice({
    name: 'favoriteContacts',
    initialState,
    reducers: {
		toggleFavorite: (state, action: PayloadAction<ContactDto>) => {
			const isFavorite = state.data.find(f => f.id === action.payload.id)

			if (isFavorite) {
				state.data = state.data.filter(f => f.id !== action.payload.id);
			} else {
				state.data.push(action.payload)
			}
		}
	},
    extraReducers(builder) {
        builder
			.addMatcher(contactsApi.endpoints.getContacts.matchFulfilled, (state, action) => {
				state.data = action.payload.slice(0, 4);
			})
	}
})