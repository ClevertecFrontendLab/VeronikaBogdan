import { JWT_TOKEN_NAME } from '~/constants';
import { apiSlice } from '~/query/create-api.ts';
import {
    Measure,
    NewRecipeResponse,
    Recipe,
    RecipeParam,
    RecipesParams,
    RecipesResponse,
} from '~/query/types/recipies';

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

        saveRecipe: builder.mutation<NewRecipeResponse, Recipe>({
            query: (body) => ({
                url: '/recipe',
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
        saveRecipeDraft: builder.mutation<NewRecipeResponse, Recipe>({
            query: (body) => ({
                url: '/recipe/draft',
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
        }),
        getMeasureUnits: builder.query<string[], void>({
            query: () => ({
                url: 'measure-units',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(JWT_TOKEN_NAME)}`,
                },
            }),
            transformResponse: (data: Measure[]) => data?.map((unit) => unit.name),
        }),
    }),
});

export const {
    useGetRecipesQuery,
    useGetRecipeQuery,
    useSaveRecipeMutation,
    useSaveRecipeDraftMutation,
    useGetMeasureUnitsQuery,
} = recipesApiSlice;
