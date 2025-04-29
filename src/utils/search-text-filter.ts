import { Card } from '~/components/horizontal-card/types';

type SearchTextFilterProps = { cards: Card[]; searchText: string };

export const searchTextFilter = ({ cards, searchText }: SearchTextFilterProps) =>
    cards.filter((card) => card.title.toLowerCase().includes(searchText.toLowerCase()));
