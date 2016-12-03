import { Injectable } from '@angular/core';

import { Player } from './player';

const players: Player[] = [
  { name: 'Bob', score: 100, pointsToAdd: 0 },
  { name: 'Sue', score: 200, pointsToAdd: 0 },
  { name: 'Travis', score: 300, pointsToAdd: 0 },
  { name: 'Jenny', score: 400, pointsToAdd: 0 },
  { name: 'William', score: 500, pointsToAdd: 0 }
]

@Injectable()
export class GameService {

  constructor() { }

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(players);
  };
  addPlayer(player: Player): Promise<void> {
    players.push(player);
    return Promise.resolve();
  };
  clearScores(): Promise<void> {
    for (let player of players) {
      player.score = 0;
    }
    return Promise.resolve();
  };
  removePlayer(player: Player): Promise<void> {
    let index = players.indexOf(player);
    if (index) {
      players.splice(index, 1);
    }
    return Promise.resolve();
  }

}
