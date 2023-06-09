import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ExternalApiService } from './external-api.service';
import { DatePipe } from '@angular/common';
import { ConversionerModule } from './components/conversioner/conversioner.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConversionerModule
  ],
  providers: [
    ExternalApiService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

