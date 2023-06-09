import { Component } from '@angular/core';
import { ExternalApiService } from 'src/app/external-api.service';
import { ExternalApiResponse } from 'src/app/models/externalApiResponse';
import { Currencies } from 'src/app/util/Currencies';

@Component({
  selector: 'app-conversioner',
  templateUrl: './conversioner.component.html',
  styleUrls: ['./conversioner.component.scss']
})
export class ConversionerComponent {

  public options: string[] = Object.values(Currencies);

  public from: string = 'USD';
  public to: string = 'UAH';
  public num: string = '';

  public result = 0;

  public switch: boolean = false;

  constructor(
    private readonly _externalApiService: ExternalApiService
  ) { }

  public onEntering(): void {
    if (this.from && this.to) {
      this.convertCurrency();
    }
  }

  public convertCurrency(): void {
    let fromValue = this.from;
    let toValue = this.to;

    if (typeof fromValue === 'object') {
      fromValue = (fromValue as any)['$ngOptionLabel']?.trim();
    }

    if (typeof toValue === 'object') {
      toValue = (toValue as any)['$ngOptionLabel']?.trim();
    }

    this._externalApiService.getTheExchangeRate(fromValue).subscribe((data: ExternalApiResponse) => {
      Object.entries(data.conversion_rates).forEach(([key, value]) => {
        if (key === toValue) {
          const result = Number(this.num) * value;
          this.result = Number(result.toFixed(2));
        }
      });
    });
  }

  public onFromChange(selectedOption: string): void {
    this.from = selectedOption;
    this.onEntering();
  }

  public onToChange(selectedOption: string): void {
    this.to = selectedOption;
    this.onEntering();
  }

  public onSwitch(): void {
    this.switch = true;
    const tempFrom = this.from;

    this.from = this.to;
    this.to = tempFrom;

    this.onEntering();
  }











}
