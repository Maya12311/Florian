const width = 2145;
const height = 1000;
const game = new Game()
//let beginn = true
const classBeginn = new Beginn()
const classEndgame = new Endgame()
//let mySound

function setup(){
  //  console.log('this is the setup')
 createCanvas(width, height) 
 
}

function draw(){
    //background(200);
    if(classBeginn.beginn){
        classBeginn.draw()
    } else {
        game.draw()
    } 
    if (game.work === 3){
        classEndgame.draw()
}   
}
    
  //  console.log('this is the draw in main')


function preload(){
        classBeginn.preload()
        game.preload()
        classEndgame.preload()
    }
    

   // console.log('this is the preload')


function keyPressed(){
   if (keyCode === 32 ){
        classBeginn.beginn = !classBeginn.beginn
        draw(classBeginn.beginnbeginn)
        preload(classBeginn.beginn)
   }
    if (keyCode === 37){
       game.player.left()
    }
    if (keyCode === 39){
        game.player.right()
    }
    if(keyCode === 38) {
        game.player.jump()
    }
}