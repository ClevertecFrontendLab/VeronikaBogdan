import { apiSlice } from '~/query/create-api.ts';
import { RecipesParams, RecipesResponse } from '~/query/types/recipies';

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesResponse, RecipesParams>({
            query: (params) => ({
                url: 'recipe',
                params,
            }),
        }),
    }),
});

export const { useGetRecipesQuery } = recipesApiSlice;
