import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RaceService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  /**Post bet to endpoint */
  postBet(bet) {
    return this.http.post(`${this.uri}/api/bet`, bet);
  }

  /**Delete a bet */
  deleteBet(id) {
    return this.http.get(`${this.uri}/api/bet/delete/${id}`);
  }

  /**Checks a bet */
  checkBet(id) {
    return this.http.get(`${this.uri}/api/bet/check/${id}`);
  }

  /**Get event by id */
  getEventById(id) {
    return this.http.get(`${this.uri}/api/event/${id}`);
  }
  /**Get current event */
  getEvent() {
    return this.http.get(`${this.uri}/api/event`);
  }
  /**Get event result */
  getEventResult(id) {
    return this.http.get(`${this.uri}/api/even/result/${id}`);
  }

  /**Get bets */
  getBets() {
    return this.http.get(`${this.uri}/api/bet/getBets`);
  }
}
