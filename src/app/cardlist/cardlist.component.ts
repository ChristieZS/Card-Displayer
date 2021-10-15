import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})

export class CardlistComponent implements OnInit {
    cards: Card[] = [];

    constructor(private cardService: CardService) {
    }

    ngOnInit() {
        this.getCards();
    }

    getCards(): void {
        this.cardService.getCards()
            .subscribe(cards => this.cards = cards);
    }

    cardImageStatus(status) {
        if(status === "EXPIRED" || status === "BLOCKED") {
            return "inactive";
        }
        else {
            return "active";
        }
    }
}
