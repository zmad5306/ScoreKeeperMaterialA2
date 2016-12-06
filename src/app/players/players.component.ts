import { Component, OnInit } from '@angular/core';

import { MdDialogRef, MdDialog } from '@angular/material';

import { GameService } from '../game.service';
import { Player } from '../player';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player: Player = null;
  players: Player[];
  dialogRef: MdDialogRef<ConfirmDialogComponent>;

  constructor(private gameService: GameService, public dialog: MdDialog) { }

  getPlayers(): void {
    this.gameService.getPlayers().then(players => { 
      this.players = players; 
    });
  }

  ngOnInit(): void {
    this.getPlayers();
  }

  onDelete(player: Player): void {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if ('yes' === result) {
        this.gameService.removePlayer(player);
      }
      this.dialogRef = null;
    });
  }

  onAdd(): void {
    this.player = {name: '', score: 0};
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
