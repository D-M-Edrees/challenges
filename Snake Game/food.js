import{onsnake, expandsnake}from "./snake.js";
import{randomGridPosition,outsideGrid }from "./grid.js";
        let food=getRandomFoodPosition();
const EXPANTION_RATE=5;
export function update(){
    if (onsnake(food)){
        expandsnake(EXPANTION_RATE);
        food=getRandomFoodPosition();
    }
}
export  function draw(gameBoard){
     const foodElement=document.createElement("div");
        foodElement.style.gridColumnStart=food.x;
        foodElement.style.gridRowStart=food.y;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);

    }
    function getRandomFoodPosition(){
        let newFoodPosition;
        while(newFoodPosition==null || onsnake(newFoodPosition)){
            newFoodPosition=randomGridPosition();
    }
    return newFoodPosition;
    }
