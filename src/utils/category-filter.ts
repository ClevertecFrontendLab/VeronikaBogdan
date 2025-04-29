import { Card } from '~/components/horizontal-card/types';
import CATEGORIES from '~/constants/categories';

type categoryFilterProps = { cards: Card[]; categories: string[] };

export const filterByCategory = ({ cards, categories }: categoryFilterProps) => {
    const categoriesPathes = CATEGORIES.filter((category) =>
        categories.includes(category.label),
    ).map((category) => category.path);

    return cards.filter((card) =>
        card.category.find((category) => categoriesPathes.includes(category)),
    );
};
