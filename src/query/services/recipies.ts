import { apiSlice } from '~/query/create-api.ts';
import { Recipe, RecipeParam, RecipesParams, RecipesResponse } from '~/query/types/recipies';

export const recipesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesResponse, RecipesParams>({
            query: ({ id, ...params }) => ({
                url: `recipe${id ? `/category/${id}` : ''}`,
                params,
            }),
        }),
        getRecipe: builder.query<Recipe, RecipeParam>({
            query: (id) => `recipe/${id}`,
        }),
    }),
});

export const { useGetRecipesQuery, useGetRecipeQuery } = recipesApiSlice;
