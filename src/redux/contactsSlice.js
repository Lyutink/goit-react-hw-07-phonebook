import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://6282a8dc38279cef71cb49f8.mockapi.io/"
    }),
    tagTypes: ["contact"],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ["contact"],
        }),
        createContact: builder.mutation({
            query: (newContact) => ({
                url: `/contacts`,
                method: "POST",
                body: newContact,
            }),
            invalidatesTags: ["contact"],
        }),
        deleteContact: builder.mutation({
            query: (contactId) => ({
                url: `/contacts/${contactId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["contact"],
        }),
    }),
});

export const {
    useFetchContactsQuery,
    useCreateContactMutation,
    useDeleteContactMutation,
} = contactsApi;