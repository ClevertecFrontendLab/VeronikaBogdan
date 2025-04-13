type card = {
    title: string;
    description: string;
    icon: string;
    badge: string;
    favorite: number;
    like: number;
};

type listItem = {
    name: string;
    icon: string;
};

export type relevantKitchenData = {
    title: string;
    description: string;
    cards: card[];
    list: listItem[];
};
