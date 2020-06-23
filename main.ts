function Game () {
    basic.clearScreen()
    game.setScore(0)
    hero = game.createSprite(2, 4)
    Catch = game.createSprite(randint(1, 3), 0)
    for (let index = 0; index < 21; index++) {
        basic.pause(500)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 28; index++) {
        basic.pause(400)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 40; index++) {
        basic.pause(300)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 80; index++) {
        basic.pause(250)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 80; index++) {
        basic.pause(200)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 120; index++) {
        basic.pause(150)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    images.createBigImage(`
        . # . . . # . . . .
        . # # . . # # . . .
        . # # # . # # # . .
        . # # . . # # . . .
        . # . . . # . . . .
        `).scrollImage(1, 200)
    for (let index = 0; index < 1e+37; index++) {
        basic.pause(100)
        Catch.change(LedSpriteProperty.Y, 1)
        if (Catch.isTouching(hero)) {
            game.addScore(1)
            Catch.delete()
            Catch = game.createSprite(randint(1, 3), 0)
        } else {
            if (Catch.isTouchingEdge()) {
                basic.pause(100)
                game.gameOver()
            }
        }
    }
    basic.showString("Uhhhhhhhhh... you win?")
    game.gameOver()
}
input.onButtonPressed(Button.A, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN
    )
    if (gamez == 1) {
        hero.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.Y, 1)
    }
})
function end () {
    game.setScore(scre)
    game.gameOver()
}
input.onGesture(Gesture.TiltLeft, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.X, -1)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (gamez == 1) {
    	
    } else {
        basic.pause(100)
        gamez = 2
        basic.pause(100)
        if (gamez == 2) {
            hardest_game()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . . # #
        # . # . .
        # # # # .
        . # . . .
        # . # . .
        `)
    basic.showString("Game made by Ethan    Instructions: use a and b to navigate your character on the bottom of the screen under the falling balls...       press a+b to start                         you still here?.........  ")
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # # # #
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . . # #
        # . # . .
        # # # # .
        . # . . .
        # . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_EVT_ANY
    )
    if (gamez == 1) {
        hero.change(LedSpriteProperty.X, 1)
    }
})
function hardest_game () {
    scre = 3000
    hard = game.createSprite(0, 4)
    enemy = game.createSprite(3, 4)
    enemy_2 = game.createSprite(1, 0)
    goal = game.createSprite(4, 2)
    enemy_2.turn(Direction.Left, 90)
    enemy.turn(Direction.Right, 90)
    for (let index = 0; index < 99999999999; index++) {
        enemy.turn(Direction.Right, 180)
        enemy_2.turn(Direction.Right, 180)
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            scre += -1
            enemy_2.move(1)
            enemy.move(1)
            if (goal.isDeleted()) {
                goal = game.createSprite(4, 2)
            } else {
                goal.delete()
            }
            if (hard.isTouching(enemy_2)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(enemy)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(goal)) {
                break;
            }
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    hard.delete()
    enemy.delete()
    enemy_2.delete()
    goal.set(LedSpriteProperty.Y, 0)
    goal.set(LedSpriteProperty.X, 0)
    _1 = game.createSprite(0, 2)
    _2 = game.createSprite(1, 2)
    _3 = game.createSprite(2, 2)
    _4 = game.createSprite(3, 2)
    _5 = game.createSprite(2, 3)
    _6 = game.createSprite(3, 3)
    _7 = game.createSprite(1, 0)
    _8 = game.createSprite(3, 1)
    hard = game.createSprite(0, 4)
    for (let index = 0; index < 999999999999999; index++) {
        basic.pause(500)
        scre += -1
        if (hard.isTouching(_1)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_2)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_3)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_4)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_5)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_6)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_7)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_8)) {
            game.setScore(0)
            game.gameOver()
        }
        if (goal.isDeleted()) {
            goal = game.createSprite(0, 0)
        } else {
            goal.delete()
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    goal.delete()
    hard.delete()
    basic.pause(100)
    _1.delete()
    basic.pause(100)
    _2.delete()
    basic.pause(100)
    _3.delete()
    basic.pause(100)
    _4.delete()
    basic.pause(100)
    _5.delete()
    basic.pause(100)
    _6.delete()
    basic.pause(100)
    _7.delete()
    basic.pause(100)
    _8.delete()
    goal = game.createSprite(4, 0)
    _1 = game.createSprite(0, 0)
    _2 = game.createSprite(1, 4)
    _3 = game.createSprite(2, 0)
    _4 = game.createSprite(3, 4)
    _5 = game.createSprite(4, 0)
    hard = game.createSprite(0, 4)
    _1.turn(Direction.Left, 90)
    _3.turn(Direction.Left, 90)
    _5.turn(Direction.Left, 90)
    _2.turn(Direction.Right, 90)
    _4.turn(Direction.Right, 90)
    for (let index = 0; index < 9999999; index++) {
        _1.turn(Direction.Left, 180)
        _3.turn(Direction.Left, 180)
        _5.turn(Direction.Left, 180)
        _2.turn(Direction.Right, 180)
        _4.turn(Direction.Right, 180)
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            scre += -1
            _1.move(1)
            _2.move(1)
            _3.move(1)
            _4.move(1)
            _5.move(1)
            if (hard.isTouching(_1)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_2)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_3)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_4)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_5)) {
                game.setScore(0)
                game.gameOver()
            }
            if (goal.isDeleted()) {
                goal = game.createSprite(4, 0)
            } else {
                goal.delete()
            }
            if (hard.isTouching(goal)) {
                break;
            }
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    _1.delete()
    basic.pause(100)
    _2.delete()
    basic.pause(100)
    _3.delete()
    basic.pause(100)
    _4.delete()
    basic.pause(100)
    _5.delete()
    hard.delete()
    goal.delete()
    goal = game.createSprite(0, 0)
    _1 = game.createSprite(0, 0)
    _2 = game.createSprite(1, 4)
    _3 = game.createSprite(2, 0)
    _4 = game.createSprite(3, 4)
    _5 = game.createSprite(4, 0)
    hard = game.createSprite(0, 4)
    _6 = game.createSprite(0, 2)
    _7 = game.createSprite(1, 2)
    _8 = game.createSprite(2, 2)
    _1.turn(Direction.Left, 90)
    _3.turn(Direction.Left, 90)
    _5.turn(Direction.Left, 90)
    _2.turn(Direction.Right, 90)
    _4.turn(Direction.Right, 90)
    for (let index = 0; index < 9999999; index++) {
        _1.turn(Direction.Left, 180)
        _3.turn(Direction.Left, 180)
        _5.turn(Direction.Left, 180)
        _2.turn(Direction.Right, 180)
        _4.turn(Direction.Right, 180)
        for (let index = 0; index < 4; index++) {
            basic.pause(500)
            scre += -1
            _1.move(1)
            _2.move(1)
            _3.move(1)
            _4.move(1)
            _5.move(1)
            if (hard.isTouching(_1)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_2)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_3)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_4)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_5)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_6)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_7)) {
                game.setScore(0)
                game.gameOver()
            }
            if (hard.isTouching(_8)) {
                game.setScore(0)
                game.gameOver()
            }
            if (goal.isDeleted()) {
                goal = game.createSprite(0, 0)
            } else {
                goal.delete()
            }
            if (hard.isTouching(goal)) {
                break;
            }
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    _1.delete()
    basic.pause(100)
    _2.delete()
    basic.pause(100)
    _3.delete()
    basic.pause(100)
    _4.delete()
    basic.pause(100)
    _5.delete()
    hard.delete()
    goal.delete()
    basic.showString("YOU WIN")
    end()
}
input.onGesture(Gesture.TiltRight, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.Y, -1)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (gamez == 2) {
    	
    } else {
        basic.pause(100)
        gamez = 1
        basic.pause(100)
        if (gamez == 1) {
            Game()
        }
    }
})
let goal: game.LedSprite = null
let enemy_2: game.LedSprite = null
let enemy: game.LedSprite = null
let scre = 0
let hard: game.LedSprite = null
let gamez = 0
let Catch: game.LedSprite = null
let hero: game.LedSprite = null
let _8: game.LedSprite = null
let _7: game.LedSprite = null
let _6: game.LedSprite = null
let _5: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.forever(function () {
	
})
