import {getInputDirections}from "./input.js";
export const SNAKE_SPEED=3;
const snakeBody=[{x:11, y:11}];
let newSegment=0;
export function update(){
    addSegment();
   let inputDirections= getInputDirections();
    for(let i=snakeBody.length-2; i>=0; i--){ 
        snakeBody[i+1]={...snakeBody[i]} ; //
}
 snakeBody[0].x +=inputDirections.x;
 snakeBody[0].y +=inputDirections.y;


}
export  function draw(gameBoard){
    snakeBody.forEach((segment)=>{
        const snakeElement=document.createElement("div");
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);

    });
}
export function expandsnake(amount){
newSegment += amount;
}
export function onsnake(position,{ignorHead=false}={}){
return snakeBody.some((segment,index)=>{
    if(ignorHead && index===0)return false;
    return equalPositions(segment,position);

});
}
function equalPositions(post1,post2){
    return post1.x===post2.x && post1.y===post2.y;

}
function addSegment(){
    for(let i=0; i< newSegment; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegment=0;
}
export function getSnakeHead(){
    return snakeBody[0];
}
export function snakeIntersection(){
    return  onsnake(snakeBody[0],{ignorHead:true});
}