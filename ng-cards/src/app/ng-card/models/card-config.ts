
export class CardConfig {
    constructor(cardConfig?: Partial<CardConfig>) {
        Object.assign(this, cardConfig);
    }
    public cardImage: string;
    public cardTitle: string;
    public cardBodyText: string;
}
