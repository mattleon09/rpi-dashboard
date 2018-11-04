import { BaseCardComponent } from './../shared/base-card/base-card.component';
import { CardLoaderService } from './../shared/base-card/card-loader.service';
import { CurrencyCardComponent } from './../currency/currency-card/currency-card.component';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [CurrencyCardComponent]
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */

  // cards: BaseCardComponent[];
  /* cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           new BaseCardComponent{ title: 'Current Rates', cols: 1, rows: 1, component: '' },
           { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
       /*  { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  ); */

 // constructor(private breakpointObserver: BreakpointObserver) {}


  cards: BaseCardComponent[] = [];

  constructor(private cardsService: CardLoaderService) {
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }
  ngOnInit(): void {
    this.createCards();
  }

  createCards(): void {
    this.cardsService.addCard()
  }

  createCards(): void {
    this.cardsService.addCard(
      new BaseCardComponent(
        {name: {key: BaseCardComponent.metadata.NAME, value: 'users'},
         routerLink: {key: BaseCardComponent.metadata.ROUTERLINK,
                      value: '/dashboard/users'},
         iconClass: {key: BaseCardComponent.metadata.ICONCLASS,
                     value: 'fa-users'},
         color: {key: BaseCardComponent.metadata.COLOR, value: 'blue'}
        }, CurrencyCardComponent)
   );
  }
}
