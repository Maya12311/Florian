let toString = ''
//let endgame = false

class Game {
    constructor(){
        this.background = new Background()
        this.backgroundImage = []
        this.player = new Player()
        this.playerImage = ''
        this.obstacles = []
        this.score = 0
        this.arbeitsamtArray = []
        this.work = 0
        
       
       // console.log(this.obstacles.length)


    }
   draw(){
        
       
   
        //clear()
       
       this.background.draw()
       
      // console.log('draw here in Game section')
      this.player.draw()

      if (frameCount % 250 === 0 && this.work < 3){
        this.arbeitsamtArray.push(new Arbeitsamt(this.arbeitsamtImage))
        //console.log(frameCount)
    } 
    this.arbeitsamtArray.forEach(function(arbeitsamt){
        arbeitsamt.draw()
    })
      
      if(frameCount % 200 === 0 && this.work < 3){
        this.obstacles.push(new Obstacle (this.obstacleImage))
     
    
    }
    this.obstacles.forEach(function (obstacle){
        obstacle.draw()
        
   })

   this.obstacles = this.obstacles.filter(obstacle => {
       if (obstacle.collision(this.player) || obstacle.x < 0) {
            return false
       } else{
          // console.log(this.obstacles);
            return true

       }
       
   })

   this.arbeitsamtArray = this.arbeitsamtArray.filter(arbeitsamt => {
       if(arbeitsamt.collision(this.player) || arbeitsamt.x < 0) {
            return false
       } else{
           return true
       }
   })
   
  // console.log(this.obstacles.length)


   }
   preload(){
    
   this.backgroundImage = [

    { src: loadImage('cyberpunk-street-files/PNG/layers/far-buildings.png'), x:0, speed: 1 },
  
    { src: loadImage('cyberpunk-street-files/PNG/layers/back-buildings.png'), x:0, speed: 2},

    { src: loadImage('cyberpunk-street-files/PNG/layers/foreground.png'), x:0, speed: 3},

    // { src: loadImage('/cyberpunk-street-files/PNG/cyberpunk-street.png'), x:0, speed: 0},

    
   ]
   this.playerImage = loadImage('laufenderman/ZfUU.gif')
   this.obstacleImage = loadImage('bilder/giphy.gif')
   this.arbeitsamtImage =loadImage('bilder/arbeitsamtfuck.png')
   this.krawatteImage = loadImage('bilder/animiertes-krawatte-bild-0003.gif')
   this.lastImage = loadImage('bilder/katzen.gif')
   
  // console.log('preload here in Game section')
   } 
   

}




