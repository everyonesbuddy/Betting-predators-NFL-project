import { Component, OnInit } from '@angular/core';
import { OddsService } from 'src/app/services/odds.service';

@Component({
  selector: 'app-nfl-spread',
  templateUrl: './nfl-spread.component.html',
  styleUrls: ['./nfl-spread.component.scss'],
})
export class NflSpreadComponent implements OnInit {
  odds: any = [];

  constructor(private oddsService: OddsService) {}

  ngOnInit(): void {
    this.oddsService.getNflEventsAndSpreadOdds().subscribe((res) => {
      this.odds = res;
      console.log('res', res);
    });
  }
}
