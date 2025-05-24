import { JWT_TOKEN_NAME } from '~/constants';
import { apiSlice } from '~/query/create-api.ts';
import { Recipe, RecipeParam, RecipesParams, RecipesResponse } from '~/query/types/recipies';

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesResponse, RecipesParams>({
            query: ({ id, ...params }) => ({
                url: `recipe${id ? `/category/${id}` : ''}`,
                params,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
        getRecipe: builder.query<Recipe, RecipeParam>({
            query: (id) => ({
                url: `recipe/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
    }),
});

export const { useGetRecipesQuery, useGetRecipeQuery } = recipesApiSlice;
