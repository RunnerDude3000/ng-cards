import { CardButton } from './card-button';

export class Card {
    constructor(card?: Partial<Card>) {
        Object.assign(this, card);
    }
    public cardImage: string;
    public cardTitle: string;
    public cardBodyText: string;
    public cardButton: CardButton;
}
