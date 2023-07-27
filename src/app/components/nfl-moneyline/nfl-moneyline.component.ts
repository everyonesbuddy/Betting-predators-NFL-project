import { Component, OnInit } from '@angular/core';
import { OddsService } from 'src/app/services/odds.service';

@Component({
  selector: 'app-nfl-moneyline',
  templateUrl: './nfl-moneyline.component.html',
  styleUrls: ['./nfl-moneyline.component.scss'],
})
export class NflMoneylineComponent implements OnInit {
  odds: any = [];

  constructor(private oddsService: OddsService) {}

  ngOnInit(): void {
    this.oddsService.getNflEventsAndMoneylineOdds().subscribe((res) => {
      this.odds = res;
      console.log('res', res);
    });
  }
}
