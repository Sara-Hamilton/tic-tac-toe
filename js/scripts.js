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
      if (this.trios[i][j].marker === "") {
        return false;
      } else {
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
  $("#playerForm").submit(function(event) {
    event.preventDefault();
    var playerXName = $("#playerX").val();
    var playerOName = $("#playerO").val();
    $("#playerForm").fadeOut(300, "swing");
    $("#board").delay(300).fadeIn(300, "swing");
    var playerX = new Player(playerXName, "X");
    var playerO = new Player(playerOName, "O");
    $(".square").click(function() {
      var clickedSquare  = $(this).attr('id');
      // write function to iterate through squares and find the one whose name === clickedSquare
      console.log(clickedSquare === game.square1.name);
      });

    });
});
