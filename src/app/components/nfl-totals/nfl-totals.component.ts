import { Component, OnInit } from '@angular/core';
import { OddsService } from 'src/app/services/odds.service';

@Component({
  selector: 'app-nfl-totals',
  templateUrl: './nfl-totals.component.html',
  styleUrls: ['./nfl-totals.component.scss'],
})
export class NflTotalsComponent implements OnInit {
  odds: any = [];

  constructor(private oddsService: OddsService) {}

  ngOnInit(): void {
    this.oddsService.getNflEventsAndTotalOdds().subscribe((res) => {
      this.odds = res;
      console.log('res', res);
    });
  }
}
