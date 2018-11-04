import { IpFinder } from './../utility/ipfinder';
import { Injectable } from '@angular/core';
import {ApiClient} from './../http/api-client.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public results: any[];

  private apiClient: ApiClient;
  private ipfinder = new IpFinder();

  constructor(apiclient: ApiClient) {
    this.apiClient = apiclient;
    this.results = [];
  }

  public async getLocation(): Promise<any> {
    try {
      const ip = await this.ipfinder.getPublicIp();
      this.results = await this.apiClient.get<any[]>({
        url: 'http://localhost:3000/location/',
        params: {
          ip: ip
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

}
