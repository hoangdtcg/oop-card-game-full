class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.cardback = "card_deck/cardback.jpg";
    }

    getHtml() {
        let path = "card_deck/" + this.value + this.suit + ".jpg";
        return `<img src = "${path}">`;
    }

    getHtmlBack() {
        return `<img src = "${this.cardback}">`;
    }
}