import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NflMoneylineComponent } from './components/nfl-moneyline/nfl-moneyline.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FuturesOddsComponent } from './components/futures-odds/futures-odds.component';
import { NflSpreadComponent } from './components/nfl-spread/nfl-spread.component';
import { NflTotalsComponent } from './components/nfl-totals/nfl-totals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NflMoneylineComponent,
    NavbarComponent,
    FuturesOddsComponent,
    NflSpreadComponent,
    NflTotalsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
