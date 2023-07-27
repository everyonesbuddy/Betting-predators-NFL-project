import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuturesOddsComponent } from './components/futures-odds/futures-odds.component';
import { HomeComponent } from './components/home/home.component';
import { NflMoneylineComponent } from './components/nfl-moneyline/nfl-moneyline.component';
import { NflSpreadComponent } from './components/nfl-spread/nfl-spread.component';
import { NflTotalsComponent } from './components/nfl-totals/nfl-totals.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'nflMoneyline',
    component: NflMoneylineComponent,
  },
  {
    path: 'nflSpread',
    component: NflSpreadComponent,
  },
  {
    path: 'nflTotals',
    component: NflTotalsComponent,
  },
  {
    path: 'futuresScreen',
    component: FuturesOddsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
