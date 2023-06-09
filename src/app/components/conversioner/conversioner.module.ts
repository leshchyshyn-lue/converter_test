import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ExternalApiService } from "src/app/external-api.service";
import { ConversionerComponent } from "./conversioner.component";
import { NgSelectModule } from "@ng-select/ng-select";


@NgModule({
  declarations: [
    ConversionerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [
    ExternalApiService
  ],
  bootstrap: [ConversionerComponent]
})
export class ConversionerModule { }
