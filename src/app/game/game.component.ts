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
      player.score += player.pointsToAdd;
      player.pointsToAdd = 0;
  }

}
