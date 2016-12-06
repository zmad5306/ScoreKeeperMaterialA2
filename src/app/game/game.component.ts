import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Player } from '../player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[];
  selectedIndex: number = 0;
  points: number = 0;

  constructor(private gameService: GameService) { }

  getPlayers(): void {
    this.gameService.getPlayers().then(players => { 
      this.players = players; 
    });
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  onAdd(player: Player): void {
      player.score += this.points;
      this.points = 0;
  }

  swipeLeft() {
    if (this.selectedIndex < this.players.length - 1) {
      this.selectedIndex++;
    }
    else {
      this.selectedIndex = 0;
    }
  }

  swipeRight() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
    else {
      this.selectedIndex = this.players.length - 1;
    }
  }

}
