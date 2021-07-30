class Player {
    constructor(name) {
        this.name = name;
        this.idHtml = '';
        this.money = 100000;
        this.hands = []; //Bài trên tay
    }

    showHands(id) {
        let html = document.getElementById(id);
        let str = `<h2 style='color:blue'>Name: ${this.name}</h2>
                   <h3 style='color:red'>Money: ${this.money}</h3>`;

        for (let i = 0; i < this.hands.length; i++) {
            str += this.hands[i].getHtml();
        }
        str += `<h2 class='sum-score' style="color:black"> Score: ${this.getSumOfHand()}</h2>`;

        html.innerHTML = str;
    }

    getSumOfHand() {
        let sum = 0;
        for (let i = 0; i < this.hands.length; i++) {
            sum += this.getCardValue(this.hands[i]);
        }
        return sum % 10 != 0 ? sum % 10 : 10;
    }

    getCardValue(card) {
        if (card.value == "J" || card.value == "Q" || card.value == "K") {
            return 10;
        } else if (card.value == "A") {
            return 1;
        } else {
            return parseInt(card.value);
        }
    }

}