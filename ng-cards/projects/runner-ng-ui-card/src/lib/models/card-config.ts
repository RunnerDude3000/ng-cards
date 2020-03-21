import { Card } from './card';
export class CardConfig {
    constructor(cardConfig?: Partial<CardConfig>) {
        Object.assign(this, cardConfig);
    }
    public card: Card;
    public customCardTemplate = false;
}
