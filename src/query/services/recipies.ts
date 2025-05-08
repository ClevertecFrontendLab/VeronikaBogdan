import { apiSlice } from '~/query/create-api.ts';
import { RecipesByCategoryParams, RecipesParams, RecipesResponse } from '~/query/types/recipies';

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesResponse, RecipesParams>({
            query: (params) => ({
                url: 'recipe',
                params,
            }),
        }),
        getRecipesByCategory: builder.query<RecipesResponse, RecipesByCategoryParams>({
            query: ({ id, params }) => ({
                url: `recipe/category/${id}`,
                params,
            }),
        }),
    }),
});

export const {
    useGetRecipesQuery,
    useGetRecipesByCategoryQuery,
    useLazyGetRecipesByCategoryQuery,
} = recipesApiSlice;
