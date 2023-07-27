import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OddsService {
  constructor(private http: HttpClient) {}

  getNflEventsAndMoneylineOdds(): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h&oddsFormat=american`
    );
  }

  getNflEventsAndSpreadOdds(): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=spreads&oddsFormat=american`
    );
  }

  getNflEventsAndTotalOdds(): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=totals&oddsFormat=american`
    );
  }

  getNflGames(): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american`
    );
  }

  getOdds(key: any, id: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american&eventIds=${id}`
    );
  }

  getNflFutures(): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/americanfootball_nfl_super_bowl_winner/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&oddsFormat=american`
    );
  }
}
