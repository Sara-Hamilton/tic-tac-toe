function Square(name) {
  this.name = name;
  this.marker = "";
}

function Board() {
  this.turn = 1;
  this.mark = "X"
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

Board.prototype.winCheck = function(gameBoard) {
  this.trios.forEach(function(trio) {
    if ((trio[0].marker !== "") && (trio[0].marker === trio[1].marker) && (trio[1].marker === trio[2].marker)) {
      winner = trio[0].marker;
      $("#winner").text("The Winner is " + winner + "!");
    }
  })
}

Board.prototype.markClickedSquare = function(clickedSquare, mark, gameBoard) {
  this.squares.forEach(function(square) {
    if (square.name === clickedSquare) {
      var targetSquare = square;
      if (targetSquare.marker !== "") {
        gameBoard.setNextTurn(-1);
      } else {
        targetSquare.marker = mark;
        $("#" + clickedSquare).text(mark);
      }
    }
  });
}

Board.prototype.getTurn = function() {
  return this.turn;
}

Board.prototype.setNextTurn = function(amount) {
  this.turn = this.turn + amount;
  return this.turn;
}

Board.prototype.getMark = function() {
  return this.mark;
}

Board.prototype.setMark = function() {
  if (this.turn % 2 !== 0) {
    this.mark = "X"
  } else {
    this.mark = "O"
  }
  return this.mark;
}

$('document').ready(function() {
  var gameBoard = new Board();

  $(".square").click(function() {
    var turn = gameBoard.getTurn();
    var mark = gameBoard.getMark();
    var clickedSquare = $(this).attr('id');
    gameBoard.markClickedSquare(clickedSquare, mark, gameBoard);
    gameBoard.setNextTurn(1);
    gameBoard.setMark();
    gameBoard.winCheck();
    if ($("#winner").text().slice(0, 1) === "T") {
      $(".square").off("click");
    }
  });
});
