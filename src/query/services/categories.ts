import { apiSlice } from '~/query/create-api.ts';
import { CategoriesResponse, Category } from '~/query/types/categories';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesResponse, void>({
            query: () => 'category',
            transformResponse(data: Category[]) {
                return {
                    all: data,
                    categories: data.filter((item) => item?.subCategories),
                };
            },
        }),
    }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
