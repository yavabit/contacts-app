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
            query: () => "/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json",
            providesTags: ['contacts']
        })
    })
})