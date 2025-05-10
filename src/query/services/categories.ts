import { apiSlice } from '~/query/create-api.ts';
import { CategoriesResponse, Category, CategoryByIdResponse } from '~/query/types/categories';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesResponse, void>({
            query: () => 'category',
            transformResponse: (data: Category[]) => ({
                all: data,
                categories: data.filter((item) => item?.subCategories),
            }),
        }),
        getCategoryById: builder.query<CategoryByIdResponse, string>({
            query: (id) => `category/${id}`,
        }),
    }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoriesApiSlice;
