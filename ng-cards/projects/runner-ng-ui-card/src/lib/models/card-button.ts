export class CardButton {
    constructor(cardButton: Partial<CardButton>) {
        Object.assign(this, cardButton);
    }
    cardButtonText: string;
    cardButtonColor: string;
    cardButtonTextColor: string;
    cardButtonCallback: () => any;
}
