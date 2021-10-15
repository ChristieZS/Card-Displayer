import { Injectable } from '@angular/core';
import { Card } from './card';
import CARDS from '../assets/cards.json';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CardService {

    constructor() { }
  
    getCards(): Observable<Card[]> {
        const cards = of(CARDS);
        return cards;
    }

    getCard(accountBid: string): Observable<Card> {
        const card = CARDS.find(c => c.accountBid === accountBid)!;
        return of(card);
    }
}
