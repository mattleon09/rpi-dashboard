import { ApiClient } from './../http/api-client.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  public results: any[];

  private apiClient: ApiClient;

  constructor(apiclient: ApiClient) {
    this.apiClient = apiclient;
    this.results = [];
  }

  public async getRate(): Promise<any> {
     try {
       return this.results = await this.apiClient.get<any[]>({
          url: 'http://localhost:3000/currency/getrate/'
       });
     } catch (error) {
       console.log(error);
     }
  }

  public async getLatestRate(): Promise<any> {
    try {
      return this.results = await this.apiClient.get<any[]>({
        url: 'http://localhost:3000/currency/latest'
      });
    } catch (error) {
      console.log(error);
    }
  }


}
