function Level_6 () {
    hard = game.createSprite(0, 4)
    _1 = game.createSprite(1, 0)
    _2 = game.createSprite(1, 2)
    _3 = game.createSprite(1, 3)
    _4 = game.createSprite(1, 4)
    _5 = game.createSprite(3, 0)
    _6 = game.createSprite(3, 1)
    _7 = game.createSprite(3, 2)
    _8 = game.createSprite(3, 4)
    goal = game.createSprite(4, 0)
    l = 0
    for (let index = 0; index < 999999999; index++) {
        scre += -1
        basic.pause(500)
        if (l == 0) {
            _2.set(LedSpriteProperty.Y, 1)
            _7.set(LedSpriteProperty.Y, 3)
            l = 1
        } else {
            _2.set(LedSpriteProperty.Y, 2)
            _7.set(LedSpriteProperty.Y, 2)
            l = 0
        }
        sim_246()
        if (goal.isDeleted()) {
            goal = game.createSprite(4, 0)
        } else {
            goal.delete()
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    del()
    hard.delete()
    goal.delete()
}
function Endless_Challenge () {
    for (let index = 0; index < 99999999999; index++) {
        lev = randint(1, 9)
        if (lev == 1) {
            Level_1()
        }
        if (lev == 2) {
            Level_2()
        }
        if (lev == 3) {
            Level_3()
        }
        if (lev == 4) {
            Level_4()
        }
        if (lev == 5) {
            Level_5()
        }
        if (lev == 6) {
            Level_6()
        }
        if (lev == 7) {
            Level_7()
        }
        if (lev == 8) {
            Level_8()
        }
        if (lev == 9) {
            Level_9()
        }
        game.addScore(1)
    }
}
function Level_5 () {
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
        sim_246()
        if (hard.isTouching(enemy)) {
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
    del()
    m = 0
    enemy.delete()
    hard.delete()
    goal.delete()
}
function sim_246 () {
    if (hard.isTouching(_1)) {
        game.gameOver()
    }
    if (hard.isTouching(_2)) {
        game.gameOver()
    }
    if (hard.isTouching(_3)) {
        game.gameOver()
    }
    if (hard.isTouching(_4)) {
        game.gameOver()
    }
    if (hard.isTouching(_5)) {
        game.gameOver()
    }
    if (hard.isTouching(_6)) {
        game.gameOver()
    }
    if (hard.isTouching(_7)) {
        game.gameOver()
    }
    if (hard.isTouching(_8)) {
        game.gameOver()
    }
}
input.onButtonPressed(Button.A, function () {
    if (gamez > 0) {
        if (hard.isDeleted()) {
        	
        } else {
            hard.change(LedSpriteProperty.X, -1)
        }
    }
    if (gamez == 0) {
        gamez = 1
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (hard.isDeleted()) {
    	
    } else {
        if (c == 0) {
            hard.change(LedSpriteProperty.Y, 1)
        } else {
            for (let index = 0; index < 4; index++) {
                hard.change(LedSpriteProperty.Y, 1)
                basic.pause(300)
            }
        }
    }
})
function end () {
    game.setScore(scre)
    basic.showString("YOU WIN")
    game.gameOver()
}
function Level_2 () {
    goal = game.createSprite(0, 0)
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
        sim_246()
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
}
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        if (hard.isDeleted()) {
        	
        } else {
            hard.change(LedSpriteProperty.X, -1)
        }
        basic.pause(300)
    }
})
function Level_8 () {
    c = 1
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
            basic.pause(300)
            scre += -1
            _1.move(1)
            _2.move(1)
            _3.move(1)
            _4.move(1)
            _5.move(1)
            if (goal.isDeleted()) {
                goal = game.createSprite(0, 0)
            } else {
                goal.delete()
            }
            if (hard.isTouching(goal)) {
                break;
            }
            sim_246()
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    c = 0
    hard.delete()
    goal.delete()
    del()
}
function Level_1 () {
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
                game.gameOver()
            }
            if (hard.isTouching(enemy)) {
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
    goal.delete()
}
function Level_4 () {
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
            if (goal.isDeleted()) {
                goal = game.createSprite(0, 0)
            } else {
                goal.delete()
            }
            if (hard.isTouching(goal)) {
                break;
            }
            sim_246()
        }
        if (hard.isTouching(goal)) {
            break;
        }
    }
    hard.delete()
    goal.delete()
    del()
}
function del () {
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
}
input.onButtonPressed(Button.AB, function () {
    if (hard.isDeleted()) {
    	
    } else {
        hard.change(LedSpriteProperty.Y, -1)
    }
})
function Level_7 () {
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
            basic.pause(300)
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
                game.gameOver()
            }
            if (hard.isTouching(_2)) {
                game.gameOver()
            }
            if (hard.isTouching(_3)) {
                game.gameOver()
            }
            if (hard.isTouching(_4)) {
                game.gameOver()
            }
            if (hard.isTouching(_5)) {
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
}
input.onButtonPressed(Button.B, function () {
    if (gamez > 0) {
        if (hard.isDeleted()) {
        	
        } else {
            hard.change(LedSpriteProperty.X, 1)
        }
    }
    if (gamez == 0) {
        gamez = 2
    }
})
function hardest_game () {
    scre = 300
    Level_1()
    Level_2()
    Level_3()
    Level_4()
    Level_5()
    Level_6()
    Level_7()
    Level_8()
    Level_9()
    end()
}
input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        if (hard.isDeleted()) {
        	
        } else {
            hard.change(LedSpriteProperty.X, 1)
        }
        basic.pause(300)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    while (input.isGesture(Gesture.LogoDown)) {
        if (hard.isDeleted()) {
        	
        } else {
            hard.change(LedSpriteProperty.Y, -1)
        }
        basic.pause(300)
    }
})
function Level_9 () {
    c = 1
    hard = game.createSprite(0, 4)
    goal = game.createSprite(4, 4)
    _1 = game.createSprite(4, 4)
    _2 = game.createSprite(4, 3)
    _3 = game.createSprite(4, 2)
    _4 = game.createSprite(4, 1)
    for (let index = 0; index < 999999; index++) {
        e = 0
        for (let index = 0; index < 5; index++) {
            scre += -1
            basic.pause(500)
            if (e == 1) {
                _1.change(LedSpriteProperty.X, -1)
                _2.change(LedSpriteProperty.X, -1)
                _3.change(LedSpriteProperty.X, -1)
                _4.change(LedSpriteProperty.X, -1)
            }
            if (e == 0) {
                _1.set(LedSpriteProperty.X, 4)
                _2.set(LedSpriteProperty.X, 4)
                _3.set(LedSpriteProperty.X, 4)
                _4.set(LedSpriteProperty.X, 4)
                e = 1
            }
            if (goal.isDeleted()) {
                goal = game.createSprite(4, 4)
            } else {
                goal.delete()
            }
            if (hard.isTouching(_1)) {
                game.gameOver()
            }
            if (hard.isTouching(_2)) {
                game.gameOver()
            }
            if (hard.isTouching(_3)) {
                game.gameOver()
            }
            if (hard.isTouching(_4)) {
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
    e = 0
    c = 0
    _1.delete()
    basic.pause(100)
    _2.delete()
    basic.pause(100)
    _3.delete()
    basic.pause(100)
    _4.delete()
    hard.delete()
    goal.delete()
}
function Level_3 () {
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
                game.gameOver()
            }
            if (hard.isTouching(_2)) {
                game.gameOver()
            }
            if (hard.isTouching(_3)) {
                game.gameOver()
            }
            if (hard.isTouching(_4)) {
                game.gameOver()
            }
            if (hard.isTouching(_5)) {
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
}
let e = 0
let enemy_2: game.LedSprite = null
let m = 0
let enemy: game.LedSprite = null
let lev = 0
let scre = 0
let l = 0
let goal: game.LedSprite = null
let gamez = 0
let c = 0
let hard: game.LedSprite = null
let _8: game.LedSprite = null
let _7: game.LedSprite = null
let _6: game.LedSprite = null
let _5: game.LedSprite = null
let _4: game.LedSprite = null
let _3: game.LedSprite = null
let _2: game.LedSprite = null
let _1: game.LedSprite = null
hard = game.createSprite(2, 2)
c = 0
hard.delete()
for (let index = 0; index < 999999999999; index++) {
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . .
        # . . # .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        # . . . .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # #
        . . . . .
        . # . . .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . # . .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . #
        . . . . .
        . # # . .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . # . . .
        . . # . .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # #
        . . . . .
        . . . # .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . #
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . #
        . . . # .
        `)
    if (gamez > 0) {
        break;
    }
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . .
        . . . # .
        `)
    if (gamez > 0) {
        break;
    }
}
if (gamez == 2) {
    hardest_game()
}
if (gamez == 1) {
    Endless_Challenge()
}
basic.forever(function () {
	
})
