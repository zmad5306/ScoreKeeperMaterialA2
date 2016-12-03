import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player: Player = null;
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

  onDelete(player: Player): void {
    this.gameService.removePlayer(player);
  }

  onAdd(): void {
    this.player = {name: '', pointsToAdd: 0, score: 0};
  }

  onSave(): void {
    if (this.player.name) {
      this.gameService.addPlayer(this.player).then(() => this.player = null);
    }
    else {
      this.player = null;
    }
  }

  onCancelSave(): void {
    this.player = null;
  }

}
