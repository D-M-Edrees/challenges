let inputDirections={x:0, y:0};
let lastInputDirections={x:0, y:0};


window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirections.y !==0)break;
            inputDirections={x:0,y:-1};
            break;
        case 'ArrowDown':
            if(lastInputDirections.y !==0)break;
            inputDirections={x:0,y:1};
            break;
                
        case 'Arrowleft':
            if(lastInputDirections.x !==0)break;
            inputDirections={ x:-1,y:0};
            break;
        case 'ArrowRight':
            if(lastInputDirections.x !==0)break;
            inputDirections={ x:1,y:0};
            break;
       
    }
});
export  function getInputDirections(){
    let lastInputDirections = inputDirections;
return inputDirections;
}