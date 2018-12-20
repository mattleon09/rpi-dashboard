import { WeatherService } from './../core/services/weather.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BaseCardComponent } from './../shared/base-card/base-card.component';
import { CardLoaderService } from './../shared/base-card/card-loader.service';
import { CurrencyCardComponent } from './../currency/currency-card/currency-card.component';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiClient } from '../core/http/api-client.service';
import { CurrencyExchangeService } from 'src/app/core/services/currency-exchange.service';
import { randomBytes } from 'crypto';
import * as currency from '../data/currency.json' ;


export class CurrencyCard {
  public title: string;
  public subtitle: string;
  public rate: {
    amount: number;
    currency: string;
  };
}

export class WeatherCard {
  public title: string;
  public subtitle: string;
  public latitude: number;
  public longitude: number;
  public timezone: string;
  public currently: {
    time: string;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    precipType: string;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndx: number;
    visibility: number;
    ozone: number;
  };
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [CurrencyCardComponent]
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */



  // Currency Properties


   currencycards: CurrencyCard[];
   weathercards: WeatherCard[];



  // cards: BaseCardComponent[];
   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
           { title: 'Current Rate', cols: 1, rows: 1, content: ''},
           { title: 'Card 2', cols: 1, rows: 1, content: '' },
          { title: 'Card 3', cols: 1, rows: 1, content: '' },
          { title: 'Card 4', cols: 1, rows: 1, content: ''  }
        ];
      }

      return this.renderCurrencyCards();
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
     private currencyexchange: CurrencyExchangeService, private weatherservice: WeatherService,
     private apiclient: ApiClient) {
       currencyexchange = new CurrencyExchangeService(apiclient);
     }

  ngOnInit() {}

    // Currency
    renderCurrencyCards(): CurrencyCard[] {

     // const content =   res; // this.currencyexchange.getRate().then((res) => {

      // });
     const objCurrency = currency.default;
      if (objCurrency) {
        this.currencycards = new Array<CurrencyCard>();
         const conversions: [] = objCurrency.conversions;
         let currencycard: CurrencyCard;
         for (let i = 0; i < conversions.length; i++) {
           currencycard = new CurrencyCard();
           currencycard.subtitle  = objCurrency.base;
           const conv = conversions[i];
           const amount = Math.round(conv['amount']);
           const curr = conv['currency'];
           currencycard.rate = {
             amount: amount,
             currency: curr
           };
         }
         this.currencycards.push(currencycard);
        }
      console.log( this.currencycards);
      return this.currencycards;
  /*
        if (err) {
          throw err;
        }
        console.log(content.toJSON());

      /*   if (content) {
          this.currencycards = new Array<CurrencyCard>();
           const data = content.toJSON();
           const conversions: [] = ''data.conversions;
           let currencycard: CurrencyCard;
           for (let i = 0; i < conversions.length; i++) {
             currencycard = new CurrencyCard();
             currencycard.subtitle  = data.base;
            console.log(conversions[i]);
             const conv = conversions[i];
             console.log(conv);
             // conv.amount = Math.round(conv.amount);
            // currencycard.rate.amount = conv.amount;
           // currencycard.rate.currency = conv.currency;
           }
           this.currencycards.push(currencycard);
          } */
     // });
    //  console.log(res);
     // console.log( this.currencycards);
    //  return  this.currencycards; */
    }

    renderWeatherCards(): WeatherCard[] {
      const data = this.weatherservice.getWeather();
      return new Array<WeatherCard>();
    }

    readFile(file: File) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        return reader.result;
      };
      reader.readAsText(file);
    }
}
