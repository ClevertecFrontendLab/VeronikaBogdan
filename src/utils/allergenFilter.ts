import { Card, ingredient } from '~/components/horizontal-card/types';

type allergensFilterProps = { cards: Card[]; allergens: string[] };

export const filterByAllergens = ({ cards, allergens }: allergensFilterProps) => {
    const changedAllergens = allergens
        .map((allergen) => allergen.replace('(', '').replace(')', '').split(' '))
        .flat();

    const findIngredientInChangedAllergens = (ingredient: ingredient) =>
        changedAllergens.some((allergen) =>
            ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
        );

    const getRecipeWithoutAllergens = (card: Card) =>
        !card.ingredients.find(findIngredientInChangedAllergens);

    return cards.filter(getRecipeWithoutAllergens);
};
