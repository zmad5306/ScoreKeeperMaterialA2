import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: GameComponent },
  { path: 'players', component: PlayersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    GameComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
