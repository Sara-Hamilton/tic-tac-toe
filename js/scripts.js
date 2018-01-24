function Square(marker) {
  this.marker = "";
}

function Board() {
  this.row1 = [square1 = new Square(), square2 = new Square(), square3 = new Square("O")];
  this.row2 = [square4 = new Square(), square5 = new Square("O"), square6 = new Square()];
  this.row3 = [square7 = new Square("O"), square8 = new Square(), square9 = new Square()];
  this.column1 = [square1, square4, square7];
  this.column2 = [square2, square5, square8];
  this.column3 = [square3, square6, square9];
  this.diagonal1 = [square1, square5, square9];
  this.diagonal2 = [square3, square5, square7];
  this.trios = [this.row1, this.row2, this.row3, this.column1, this.column2, this.column3, this.diagonal1, this.diagonal2];
}

function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

Board.prototype.winCheck = function() {
  this.trios.forEach(function(trio) {
    if ((trio[0].marker !== "") && (trio[0].marker === trio[1].marker) && (trio[1].marker === trio[2].marker)) {
      var winner = trio[0].marker;
      return winner;
    }
  })
}

Board.prototype.gameOverCheck = function() {
  for (var i = 0; i < this.trios.length; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(i, j)
      if (this.trios[i][j].marker === "") {
        console.log(this.trios[i][j], 'false')
        return false;
      } else {
        console.log("true");
        return true;
      }
    }
  }
}





// for (square in test4){
// console.log(test4[square].marker)
// }
// if (test4.square1.marker === "X" && test4.square2.marker === "X" && test4.square3.marker === "X"){
// console.log("YAY!")
// }
//
// for (let square in test4){
// console.log(test4[square])
// }








var game = new Board();
game.row1[2].marker = "O";
game.row2[1].marker = "O";
game.row3[0].marker = "O";

// gameBoard.push(game)
// game.winCheck();
game.gameOverCheck();

$('document').ready(function() {







});
