import { BaseCardComponent } from './base-card.component';
import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

@Injectable()
export class CardLoaderService {
  private _cards: BehaviorSubject<BaseCardComponent[]> = new BehaviorSubject<BaseCardComponent[]>([]);
  constructor() {}

  addCard(card: BaseCardComponent): void {
    this._cards.next(this._cards.getValue().concat(card));
  }

  get cards(): BehaviorSubject<BaseCardComponent[]> {
    return this._cards;
  }

  removeCard(card: BaseCardComponent): void {
    const array = this._cards.getValue();
    array.forEach((item, index) => {
      if (item === card) { array.splice(index, 1); }
    });
    this._cards.next(array);
  }
}
