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
            query: () => "/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json",
            providesTags: ['groupContacts']
        })
    })
})