import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
    selector: 'app-carddetails',
    templateUrl: './carddetails.component.html',
    styleUrls: ['./carddetails.component.scss']
})

export class CarddetailsComponent implements OnInit {
    card: Card | undefined;
    
    constructor(
        private route: ActivatedRoute,
        private cardService: CardService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getCard();
    }

    getCard(): void {
        const accountBid = String(this.route.snapshot.paramMap.get('accountBid'));
        this.cardService.getCard(accountBid)
        .subscribe(card => this.card = card);
    }
  
    formatPAN(x: string) {
        let pan = x.substring(0, 6) + '******' + x.substring(12, x.length)
        let spaces = ''
        // Some weirdness with regexp resulting in array with empty string elements
        // joining all together caused z1234zz56**zz****zz7654z (where z is a space)
        // Using below instead
        pan.split(/(\S{1,4})/).forEach((s) => {
            if(s && s !== ''){
              spaces += s + ' '
            }
        })
        return spaces.trim();
    }

    checkAuthorisations(x) {
        if(x === undefined) {
            return this.formatMoney(0.00);
        }
        else {
            return this.formatMoney(x);
        }
    }

    formatMoney(x) {
        return x.toLocaleString(undefined, {minimumFractionDigits: 2});
    }

    cardImageStatus(status) {
        if(status === "ACTIVE") {
            return "active";
        }
 
        return "inactive";
    }
}
