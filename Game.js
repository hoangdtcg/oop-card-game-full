class Game {
    constructor(id, numberPlayer) {
        this.ui = null;
        this.id = id;
        this.numberCard = 3;
        this.numberPlayer = numberPlayer;
        this.desk = new Desk();
        this.players = [];
        this.deal = 0;
        // this.player1 = new Player("Lâm Ù Đền");
        // this.player2 = new Player("Phúc Tất Tay");
    }

    createUI() {
        this.ui = document.createElement('div'); //tạo ra thẻ html div
        this.ui.setAttribute('id', this.id); //Gán cho thẻ div 1 cái id có giá trị là this.id
        document.body.appendChild(this.ui); //đưa nó vào bên trong thẻ nào

        this.deskUI = document.createElement('div');
        this.deskUI.setAttribute('id', 'desk');
        this.ui.appendChild(this.deskUI);

        this.resultUI = document.createElement('h3');
        this.resultUI.setAttribute('id', 'result');
        this.resultUI.setAttribute('style', 'color:green');
        this.ui.appendChild(this.resultUI);
        // this.player1UI = document.createElement('div');
        // this.player1UI.setAttribute('id', 'player1');
        // this.player2UI = document.createElement('div');
        // this.player2UI.setAttribute('id', 'player2');

        for (let i = 1; i <= this.numberPlayer; i++) {
            this.playerUI = document.createElement('div');
            this.playerUI.setAttribute('id', 'player' + i);
            this.ui.appendChild(this.playerUI);
            //Tạo ra player luôn
            let player = new Player("Player " + i);
            player.idHtml = 'player' + i;
            this.players.push(player);
        }


        // this.ui.appendChild(this.player1UI);
        // this.ui.appendChild(this.player2UI);
        // this.ui.appendChild(this.deskUI);

    }


    start() {
        this.desk.createDesk();
        this.desk.shuffleCard();
    }

    drawCardToPlayer() {
        this.deal = 0;
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].hands = this.desk.getDrawCard(this.numberCard);
            this.players[i].showHands(this.players[i].idHtml);
            this.players[i].money -= 10000;
            this.deal += 10000;
        }
        this.checkWin();
        // setTimeout(this.checkWin, 1000);
    }

    checkWin() {
        let winPlayer = this.players[0];
        for (let i = 1; i < this.players.length; i++) {
            if (this.players[i].getSumOfHand() > winPlayer.getSumOfHand()) {
                winPlayer = this.players[i];
            }
        }

        winPlayer.money += this.deal;
        // alert(winPlayer.name + " win with score is " + winPlayer.getSumOfHand());
        this.resultUI.innerHTML = winPlayer.name + " win with score is " + winPlayer.getSumOfHand();
        this.displayAllPlayer();
    }

    displayAllPlayer() {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].showHands(this.players[i].idHtml);
        }
    }
}