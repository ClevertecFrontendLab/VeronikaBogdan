import { apiSlice } from '~/query/create-api.ts';
import {
    Recipe,
    RecipesByCategoryParams,
    RecipesParams,
    RecipesResponse,
} from '~/query/types/recipies';

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
        getRecipe: builder.query<Recipe, string | undefined>({
            query: (id) => `recipe/${id}`,
        }),
    }),
});

export const { useGetRecipesQuery, useGetRecipesByCategoryQuery, useGetRecipeQuery } =
    recipesApiSlice;
