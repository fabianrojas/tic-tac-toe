var squares = [];
var Square = function(num){
    this.icon = num;
    this.mark = false;
    this.win = false;
};

window.addEventListener('load', function(){
    
    var gameBoard = document.querySelector('.board');
    gameBoard.innerHTML = '';
    for(var i = 0; i < 9; i++){
     var square = new Square(i);
     squares.push(square);
    }
});