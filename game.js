class Game {
    constructor() { }

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
        
    }

    play() {
        form.hide()
        bg = createSprite(width / 2, height / 2)
        bg.addImage(bgi)
        bg.scale = 1.15
        bg.velocityX = -2

        tank1 = createSprite(width / 2 - 550, height - 200, 50, 50);
         tank1.addImage(tank1I)
         tank1.scale = 0.5
         tank2 = createSprite(width - 100, height - 200, 50, 50);
         tank2.addImage(tank2I)
         tank2.scale = 0.5

         if(bg.x < 500){
            bg.x = width/2
          }
          
            if(keyDown("D")||keyDown("d")){
              tank1.x += 6
            }
          
            if(keyDown("A")||keyDown("a")){
              tank1.x -= 6
            }
          
            if(keyDown(RIGHT_ARROW)){
              tank2.x += 6
            }
          
            if(keyDown(LEFT_ARROW)){
              tank2.x -= 6
            }

            drawSprites()

    }
}