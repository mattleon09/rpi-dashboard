import { Injectable } from '@angular/core';
import {ApiClient} from './../http/api-client.service';
import { IpFinder } from './../utility/ipfinder';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public results: any[];

  private apiClient: ApiClient;
  private ipfinder = new IpFinder();

  constructor(apiclient: ApiClient) {
    this.apiClient = apiclient;
    this.results = [];
  }

  public async getWeather(): Promise<any> {
    try {
      const ip = await this.ipfinder.getPublicIp();
      this.results = await this.apiClient.get<any[]>({
        url: 'http://localhost:3000/weather/',
        params: {
          ip: ip
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
