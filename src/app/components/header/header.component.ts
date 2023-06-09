import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExternalApiService } from 'src/app/external-api.service';
import { ExternalApiResponse } from 'src/app/models/externalApiResponse';
import { Currencies } from 'src/app/util/Currencies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public eurExchangeRate: number = 0;
  public usdExchangeRate: number = 0;

  public currentDate: string = '';

  constructor(
    private readonly _externalApiService: ExternalApiService,
    private datePipe: DatePipe
  ) { }

  public ngOnInit(): void {
    this.getCurrentDate();
    this.setConversionRates(Currencies.EUR);
    this.setConversionRates(Currencies.USD);
  }

  public getCurrentDate(): void {
    const date = new Date();
    this.currentDate = this.datePipe.transform(date, 'dd.MM.yyyy')!;
  }

  public setConversionRates(currency: string) {
    this._externalApiService.getTheExchangeRate(currency).subscribe((data: ExternalApiResponse) => {
      this.setCurrency(data.conversion_rates, currency);
    });
  }

  public setCurrency(conversionRates: Object, currency: string): void {
    Object.entries(conversionRates).forEach(([key, value]) => {
      if (key === Currencies.UAH) {
        if (currency === Currencies.EUR) {
          this.eurExchangeRate = Number(value.toFixed(2));
          return;
        }
        if (currency === Currencies.USD) {
          this.usdExchangeRate = Number(value.toFixed(2));
        }
      }
    });
  }


}

