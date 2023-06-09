import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExternalApiService {

  constructor(private readonly _http: HttpClient) { }

  public getTheExchangeRate(currency: string): Observable<any> {
    return this._http.get(`https://v6.exchangerate-api.com/v6/961b0d0531593ae3d8394d41/latest/${currency}`);
  }
}