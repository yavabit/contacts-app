import { baseUrl } from '../api';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { ContactDto } from 'src/types/dto/ContactDto';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
		baseUrl,
	}),
    tagTypes: ['contacts'],
    endpoints: build => ({
        getContacts: build.query<ContactDto[], void>({
            query: () => "/0/h/f1e98b0d70d16a909818b03b72415733.json",
            providesTags: ['contacts']
        })
    })
})