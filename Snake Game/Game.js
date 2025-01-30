import{SNAKE_SPEED,getSnakeHead,snakeIntersection,update as updateSnake,draw as drawSnake}from "./snake.js";
import{update as updatefood,draw as drawFood}from "./food.js";
import { outsideGrid } from "./grid.js";
let LastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById("game-board");
function main(currentTime){
    if(gameOver){
        return alert("You lose!");
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender =(currentTime - LastRenderTime)/1000;//seconds
    // console.log("Render");
    if (secondsSinceLastRender< 1/ SNAKE_SPEED) return; 
    LastRenderTime= currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);
  function update(){
    updateSnake();
    updatefood();
    checkDeath();
  }
function draw(){
    gameBoard.innerHTML=" ";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
    function  checkDeath(){
gameOver=outsideGrid(getSnakeHead()) ||snakeIntersection();
    }