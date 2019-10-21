import { Component, OnInit } from '@angular/core';
import { RaceService } from 'src/app/data/race.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  title: String = 'Betting Cashier';
  accountBalance: Number = 78807;
ui: Object = {'mainGame': 'Main', 'doubleGame': 'Double', 'tricast': 'Tricast', 'ghNo': '#',
'ghName': 'Name', 'ghPerf': 'Performance', 'ghLast5': 'Last 5', 'winner': 'WINNER', 'place2': 'PLACE 2' };

event;
dog;
  constructor(private race: RaceService) { }

  ngOnInit() {
   this.race.getEvent().subscribe((event) => {
      console.log(event);
      this.event = event;
      this.dog = this.event.dog;
      console.log(this.dog);
   });
}

}
