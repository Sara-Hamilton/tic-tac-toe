function Square(name) {
  this.name = name;
  this.marker = "";
}

function Board() {
  this.square1 = new Square("square1");
  this.square2 = new Square("square2");
  this.square3 = new Square("square3");
  this.square4 = new Square("square4");
  this.square5 = new Square("square5");
  this.square6 = new Square("square6");
  this.square7 = new Square("square7");
  this.square8 = new Square("square8");
  this.square9 = new Square("square9");
  this.squares = [this.square1, this.square2, this.square3, this.square4, this.square5, this.square6, this.square7, this.square8, this.square9];
  this.row1 = [this.square1, this.square2, this.square3];
  this.row2 = [this.square4, this.square5, this.square6];
  this.row3 = [this.square7, this.square8, this.square9];
  this.column1 = [this.square1, this.square4, this.square7];
  this.column2 = [this.square2, this.square5, this.square8];
  this.column3 = [this.square3, this.square6, this.square9];
  this.diagonal1 = [this.square1, this.square5, this.square9];
  this.diagonal2 = [this.square3, this.square5, this.square7];
  this.trios = [this.row1, this.row2, this.row3, this.column1, this.column2, this.column3, this.diagonal1, this.diagonal2];
}

function Player(name, symbol) {
  this.name = name;
  this.symbol = symbol;
}

function Game() {
  this.turn = 1;
  this.mark = "X"
}

Board.prototype.winCheck = function() {
  this.trios.forEach(function(trio) {
    if ((trio[0].marker !== "") && (trio[0].marker === trio[1].marker) && (trio[1].marker === trio[2].marker)) {
      var winner = trio[0].marker;
      console.log(winner);
      return winner;
    }
  });
}

Board.prototype.gameOverCheck = function() {
  for (var i = 0; i < this.trios.length; i++) {
    for (var j = 0; j < 3; j++) {
      if (this.trios[i][j].marker === "") {
        return false;
      } else {
        return true;
      }
    }
  }
}

Board.prototype.markClickedSquare = function(clickedSquare, mark) {
  this.squares.forEach(function(square){
    if (square.name === clickedSquare){
      var targetSquare = square;
      targetSquare.marker = mark;
      $("#" + clickedSquare).text(mark);
    }
  });
}

Game.prototype.getTurn = function() {
  return this.turn;
}

Game.prototype.setNextTurn = function() {
  this.turn = this.turn + 1;
  return this.turn;
}

Game.prototype.getMark = function() {
  return this.mark;
}

Game.prototype.setMark = function() {
  if (this.turn % 2 !== 0) {
    this.mark = "X"
  } else {
    this.mark = "O"
  }
  return this.mark;
}
// Game function(){
//     for (var turn = 1; win === false; turn ++){
//       if (turn <=9){
//         whichPlayer(turn)
//       }
//     }
// }
//

var newGame = new Game();
var gameBoard = new Board();

// gameBoard.push(game)
// game.winCheck();
gameBoard.gameOverCheck();
// game.findClickedSquare();

$('document').ready(function() {
  $("#playerForm").submit(function(event) {
    event.preventDefault();
    var playerXName = $("#playerX").val();
    var playerOName = $("#playerO").val();
    $("#playerForm").fadeOut(300, "swing");
    $("#board").delay(300).fadeIn(300, "swing");
    var playerX = new Player(playerXName, "X");
    var playerO = new Player(playerOName, "O");
      });
    // });

    $(".square").click(function() {
      turn = newGame.getTurn();
      mark = newGame.getMark();
      var clickedSquare  = $(this).attr('id');
      gameBoard.markClickedSquare(clickedSquare, mark);
      gameBoard.winCheck();
      newGame.setNextTurn();
      newGame.setMark();
      });


    });
// });
