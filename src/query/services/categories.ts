import { apiSlice } from '~/query/create-api.ts';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<void, void>({
            query: () => 'category',
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
