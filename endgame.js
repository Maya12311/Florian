class Endgame{
    constructor(){
        this.endpic
        this.x=0
        this.y =0
        this.width =2145
        this.height = 1400
       
    }
    draw(){
        text('or to Pause', 0, 0)
            fill(200)
        image(this.endpic, this.x, this.y, this.width, this.height)
        
    }
    preload(){
        this.endpic = loadImage('bilder/Ao.gif')

    }
}