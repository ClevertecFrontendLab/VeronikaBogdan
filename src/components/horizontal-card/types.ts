type nutritionValue = {
    calories: number;
    proteins: number;
    fats: number;
    carbohydrates: number;
};

export type ingredient = {
    title: string;
    count: string;
    measureUnit: string;
};

type step = {
    stepNumber: number;
    description: string;
    image: string;
};

export type Card = {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    image: string;
    bookmarks: number;
    likes: number;
    date: string;
    time: string;
    portions?: number;
    nutritionValue: nutritionValue;
    ingredients: ingredient[];
    steps: step[];
    meat?: string;
    side?: string;
};

export type HorizontalCardProps = {
    card: Card;
    dataTestIdButton?: string;
};
