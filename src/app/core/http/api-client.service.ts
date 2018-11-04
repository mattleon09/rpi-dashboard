import { Injectable, ErrorHandler } from '@angular/core';
import axios from 'axios';
import {AxiosInstance} from 'axios';


export interface Params {
  [key: string]: any;
}

export interface GetOptions {
 url: string;
 params?: Params;
}

export interface PostOptions {
 url: string;
 data?: any;
}

export interface PutOptions {
 url: string;
 data?: any;
}

export interface DeleteOptions {
 url: string;
 params?: Params;
}

export interface ErrorResponse {
 id: string;
 code: string;
 message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiClient {


  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  constructor(errorHandler: ErrorHandler) {
      this.errorHandler = errorHandler;

      // The ApiClient wraps calls to the underlying Axios client.
      this.axiosClient = axios.create({
        timeout: 3000,
        headers: {
          'X-Initialized-At': Date.now().toString()
        }
      });
  }

    // ---
    // PUBLIC METHODS.
    // ---
    // I perform a GET request with the given options.
    public async get<T>(options: GetOptions): Promise<T> {
      try {
        const axiosResponse = await this.axiosClient.request<T>({
            method: 'get',
            url: options.url,
            params: options.params
        });
        return(axiosResponse.data);
      } catch (error) {
        return (Promise.reject(this.normalizeError(error)));
      }
    }

    public async post<T>(options: PostOptions): Promise<T> {
      try {
        const axiosResponse = await this.axiosClient.request<T>({
          method: 'post',
          url: options.url,
          data: options.data
        });
        return(axiosResponse.data);
      } catch (error) {
        return(Promise.reject(this.normalizeError(error)));
      }
    }

    public async put<T>(options: PutOptions): Promise<T> {
      try {
        const axiosResponse = await this.axiosClient.request<T>({
          method: 'put',
          url: options.url,
          data: options.data
        });
        return(axiosResponse.data);
      } catch (error) {
        return(Promise.reject(this.normalizeError(error)));
      }
    }

    public async delete<T>(options: DeleteOptions): Promise<T> {
      try {
        const axiosResponse = await this.axiosClient.request<T>({
          method: 'delete',
          url: options.url,
          params: options.params
        });
        return(axiosResponse.data);
      } catch (error) {
        return (Promise.reject(this.normalizeError(error)));
      }
    }


  // ---
    // PRIVATE METHODS.
    // ---
    // Errors can occur for a variety of reasons. I normalize the error response so that
    // the calling context can assume a standard error structure.
    private normalizeError( error: any ): ErrorResponse {
        this.errorHandler.handleError( error );
        // NOTE: Since I'm not really dealing with a production API, this doesn't really
        // normalize anything (ie, this is not the focus of this demo).
        return({
            id: '-1',
            code: 'UnknownError',
            message: 'An unexpected error occurred.'
        });
    }
}
