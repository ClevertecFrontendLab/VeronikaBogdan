import { JWT_TOKEN_NAME } from '~/constants';
import { apiSlice } from '~/query/create-api.ts';
import { CategoriesResponse, Category, CategoryByIdResponse } from '~/query/types/categories';

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<CategoriesResponse, void>({
            query: () => ({
                url: 'category',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
            transformResponse: (data: Category[]) => ({
                all: data,
                categories: data.filter((item) => item?.subCategories),
            }),
        }),
        getCategoryById: builder.query<CategoryByIdResponse, string>({
            query: (id) => ({
                url: `category/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
    }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoriesApiSlice;
