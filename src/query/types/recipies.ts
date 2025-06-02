import { AuthResponse } from './auth';

export type Step = {
    stepNumber: string | number;
    description: string;
    image: string | null | undefined;
};

export type NutritionValue = {
    calories: number;
    fats: number;
    carbohydrates: number;
    protein?: number;
    proteins?: number;
};

export type Ingredient = {
    title: string;
    count: string | number;
    measureUnit: string;
};

export type Recipe = {
    title: string;
    description: string;
    time: number | string;
    image: string;
    likes: number;
    bookmarks: number;
    views: number;
    portions: number | string;
    authorId: string;
    categoriesIds: string[];
    steps: Step[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
    _id?: string;
    createdAt?: string;
};

export type Meta = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

export type RecipesResponse = {
    data: Recipe[];
    meta: Meta;
};

export type RecipesParams = {
    id?: string;
    page?: number;
    limit?: number;
    allergens?: string | null;
    searchString?: string;
    meat?: string;
    garnish?: string;
    subcategoriesIds?: string;
    sortBy?: string;
    sortOrder?: string;
};

export type RecipeParam = string | undefined;

export type Measure = {
    _id: string;
    name: string;
};

export type NewRecipeResponse = AuthResponse;
