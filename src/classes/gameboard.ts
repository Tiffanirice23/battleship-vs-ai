type board = [
  boolean | null
][];

class Gameboard {
  board: board;
  ships: [];

  constructor(length: number, height: number) {
    this.board = this.setupBoard(length, height);
  }

  setupBoard(length, height): board {
    let board = [];
    for (let h = 0; h < height; h++) {
      let row = [];
      for (let l = 0; l < length; l++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }

  receiveAttack() {

  }
}

export default Gameboard;
