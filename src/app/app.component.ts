import { Component, OnInit } from '@angular/core';

import { MdDialogRef, MdDialog } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { GameService } from './game.service';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  
  dialogRef: MdDialogRef<ConfirmDialogComponent>;

  constructor(private gameService: GameService, public dialog: MdDialog) { }

  ngOnInit(): void { }

  onNewGame(): void {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if ('yes' === result) {
        this.gameService.clearScores();
      }
      this.dialogRef = null;
    });
  }

}
