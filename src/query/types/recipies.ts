export type Step = {
    stepNumber: string;
    description: string;
    image: string;
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
    count: string;
    measureUnit: string;
};

export type Recipe = {
    _id: string;
    createdAt: string;
    title: string;
    description: string;
    time: number;
    image: string;
    likes: number;
    bookmarks: number;
    views: number;
    portions: number;
    authorId: string;
    categoriesIds: string[];
    steps: Step[];
    nutritionValue: NutritionValue;
    ingredients: Ingredient[];
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
