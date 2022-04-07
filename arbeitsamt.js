class Arbeitsamt{
constructor(img){
    this.x = 2000
    this.y = random(500, 700)
    this.w = 100
    this.h = 100
    this.img = img
    this.xforKrawatte = 0
    this.yforKrawatte = 0
}

draw(){
    if(game.work < 3){
    this.x-=5
    } else{
        this.x = 0
    }
    image(this.img, this.x, this.y, this.w, this.h)

    /*if(game.endgame === true){
        text('Game Over', 200, 300)
    }*/
   
    //image(game.krawatteImage, this.xforKrawatte, this.yforKrawatte )
}
collision(playerinf){
const arbeitsamtX = this.x + this.w /2
const arbeitsamtY = this.y + this.h /2
const playerinfX = playerinf.x + playerinf.width /2
const playerinfY = playerinf.y + playerinf.height /2
if(dist(arbeitsamtX, arbeitsamtY, playerinfX, playerinfY) < 150 ){
    game.work ++
    workLife()
    //document.getElementById('krawatte').innerHTML = `${image(game.krawatteImage, this.xforKrawatte, this.yforKrawatte )}`
    return true
}   else {
        return false
}
   
}

}



function workLife(){
    if(game.work === 1){
        const image = document.createElement('img')

        document.querySelector('.krawatte').appendChild(image)
        image.src = '/Images/animiertes-krawatte-bild-0003.gif'
        image.style.height = 90 + 'px'
    }
    if(game.work === 2) {
        const image = document.createElement('img')

        document.querySelector('.krawatte').appendChild(image)
        image.src = '/Images/animiertes-krawatte-bild-0003.gif'
        image.style.height = 90 + 'px'

    }
    if(game.work ===3) {
        
        const image = document.createElement('img')
        document.querySelector('.krawatte').appendChild(image)
        image.src = '/Images/animiertes-krawatte-bild-0003.gif' 
        image.style.height = 90 + 'px'
        const gameOver =  document.getElementById('gameOver')
        gameOver.innerHTML = 'Game Over'
        gameOver.style.height = 200 + 'px'
       // gameOver.style.paddingLeft = 10 + '%'
        

    }
}


