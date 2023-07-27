import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OddsService } from 'src/app/services/odds.service';

@Component({
  selector: 'app-futures-odds',
  templateUrl: './futures-odds.component.html',
  styleUrls: ['./futures-odds.component.scss'],
})
export class FuturesOddsComponent implements OnInit {
  odds: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private oddsService: OddsService
  ) {}

  ngOnInit(): void {
    this.oddsService.getNflFutures().subscribe((res) => {
      this.odds = res;
      console.log('res', res);
    });
  }
}
