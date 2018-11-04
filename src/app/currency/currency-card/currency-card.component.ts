import { ApiClient } from './../../core/http/api-client.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Currency} from './currency';
import { CurrencyExchangeService } from 'src/app/core/services/currency-exchange.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyCardComponent implements OnInit {

  base: string;
  currency: Currency;
  constructor(currencyexchange: CurrencyExchangeService, apiclient: ApiClient) {
    currencyexchange = new CurrencyExchangeService(apiclient);
    console.log(currencyexchange);
   }

  ngOnInit() {
  }

}
