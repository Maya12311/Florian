//console.log('player is speaking')

class Player {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = 270
        this.height = 320
        this.gravity = 2
        this.velocity = 0
         
    }
    draw(){
        
        image(game.playerImage, this.x, this.y, this.width, this.height)

        this.velocity += this.gravity
        this.y += this.velocity
        //console.log(this.velocity);
        if (this.y >= 900 - this.height){
            this.y = 900 - this.height
        }

    }
    jump(){
        this.velocity = -40
    }
   right(){
      this.x += 50
   }
   left(){
       this.x -= 50
   } 
} 