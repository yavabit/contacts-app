import { baseUrl } from '../api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const groupContactsApi = createApi({
    reducerPath: 'groupContacts',
    baseQuery: fetchBaseQuery({
		baseUrl,
	}),
    tagTypes: ['groupContacts'],
    endpoints: build => ({
        getGroupContacts: build.query<GroupContactsDto[], void>({
            query: () => "/0/h/f1e98b0d70d16a909818b03b72415733.json",
            providesTags: ['groupContacts']
        })
    })
})