input.onButtonPressed(Button.A, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(300)
})
function end () {
    game.setScore(scre)
    basic.showString("YOU WIN")
    game.gameOver()
}
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        if (gamez == 2) {
            hard.change(LedSpriteProperty.X, -1)
        }
        basic.pause(300)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (gamez == 1) {
    	
    } else {
        basic.pause(100)
        basic.pause(100)
        hardest_game()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.Y, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (gamez == 2) {
        hard.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.Shake, function () {
    gamez = 2
})
function hardest_game () {
    scre = 300
    hard = game.createSprite(0, 4)
    enemy = game.createSprite(3, 4)
    enemy_2 = game.createSprite(1, 0)
    goal = game.createSprite(4, 2)
    enemy_2.turn(Direction.Left, 90)
    enemy.turn(Direction.Right, 90)
    gamez = 2
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
            if (hard.isTouching(goal)) {
                break;
            }
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
            if (hard.isTouching(goal)) {
                break;
            }
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
    basic.pause(100)
    _6.delete()
    basic.pause(100)
    _7.delete()
    basic.pause(100)
    _8.delete()
    basic.pause(100)
    hard.delete()
    goal.delete()
    enemy = game.createSprite(3, 0)
    goal = game.createSprite(3, 0)
    _1 = game.createSprite(0, 0)
    _2 = game.createSprite(2, 1)
    _3 = game.createSprite(3, 1)
    _4 = game.createSprite(4, 0)
    _5 = game.createSprite(0, 2)
    hard = game.createSprite(0, 4)
    _6 = game.createSprite(1, 3)
    _7 = game.createSprite(2, 3)
    _8 = game.createSprite(3, 3)
    for (let index = 0; index < 999999999999999; index++) {
        basic.pause(300)
        scre += -1
        if (m == 13) {
            enemy.set(LedSpriteProperty.X, 3)
            enemy.set(LedSpriteProperty.Y, 0)
            m = 0
        }
        if (m == 12) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 13
        }
        if (m == 11) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 12
        }
        if (m == 10) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 11
        }
        if (m == 9) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 10
        }
        if (m == 8) {
            enemy.change(LedSpriteProperty.Y, 1)
            m = 9
        }
        if (m == 7) {
            enemy.change(LedSpriteProperty.Y, 1)
            m = 8
        }
        if (m == 6) {
            enemy.change(LedSpriteProperty.X, 1)
            m = 7
        }
        if (m == 5) {
            enemy.change(LedSpriteProperty.X, 1)
            m = 6
        }
        if (m == 4) {
            enemy.change(LedSpriteProperty.X, 1)
            m = 5
        }
        if (m == 3) {
            enemy.change(LedSpriteProperty.Y, 1)
            m = 4
        }
        if (m == 2) {
            enemy.change(LedSpriteProperty.Y, 1)
            m = 3
        }
        if (m == 1) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 2
        }
        if (m == 0) {
            enemy.change(LedSpriteProperty.X, -1)
            m = 1
        }
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
        if (hard.isTouching(enemy)) {
            game.setScore(0)
            game.gameOver()
        }
        if (hard.isTouching(_8)) {
            game.setScore(0)
            game.gameOver()
        }
        if (goal.isDeleted()) {
            goal = game.createSprite(3, 0)
        } else {
            goal.delete()
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    end()
}
input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        if (gamez == 2) {
            hard.change(LedSpriteProperty.X, 1)
        }
        basic.pause(300)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        if (gamez == 2) {
            hard.change(LedSpriteProperty.Y, -1)
        }
        basic.pause(300)
    }
})
let m = 0
let goal: game.LedSprite = null
let enemy_2: game.LedSprite = null
let enemy: game.LedSprite = null
let scre = 0
let hard: game.LedSprite = null
let gamez = 0
let _8: game.LedSprite = null
let _7: game.LedSprite = null
let _6: game.LedSprite = null
let _5: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
for (let index = 0; index < 4; index++) {
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . .
        # . . # .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        # . . . .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # #
        . . . . .
        . # . . .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . # . .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . #
        . . . . .
        . # # . .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . # . .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # #
        . . . . .
        . . . # .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . #
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . #
        . . . # .
        `)
    if (gamez == 2) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . .
        . . . # .
        `)
    if (gamez == 2) {
        break;
    }
}
control.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_B,
EventBusValue.MICROBIT_BUTTON_EVT_DOWN
)
basic.forever(function () {
	
})
