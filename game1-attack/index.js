const enemyHP = document.getElementById("enemy-hp")
const playerHP = document.querySelector("h3")
const playerMana = document.querySelector("h4")
const diceBtn = document.getElementById("roll-dice-btn")
const attackBtn = document.getElementById("attack-btn")
const diceImage = document.getElementById("dice")
const mainDiv = document.getElementById("main")
const startBtn = document.getElementById("start-btn")
const beforeScreen = document.getElementById("before-screen")
const skill1Btn = document.getElementById("skill1")
const skill2Btn = document.getElementById("skill2")
const skill3Btn = document.getElementById("skill3")
const skill4Btn = document.getElementById("skill4")

let diceRolled = false
let diceSrc = "dice-1"
let diceVar = 0

let skill1 = false
let skill2 = false
let skill3 = false
let skill4 = false

let inGame = false

let player = new Character("", 150, 5, 0.1, 0.1)

let enemy = new Character("Boros the destroyer", 1000, 0, 0.1, 0.1)

diceBtn.addEventListener("click",rollDice)
attackBtn.addEventListener("click",attack)
startBtn.addEventListener("click", startGame)
skill1Btn.addEventListener("click",function(){
    deactiveSkills()
    if(player.mana === 0){
        alert("You have no Mana, fool")
        return
    }
    skill1 = true
    skill1Btn.setAttribute("style",`
        background-color: #a41313;
    
    `)
})

skill2Btn.addEventListener("click",function(){
    deactiveSkills()
    if(player.mana === 0){
        alert("You have no Mana, fool")
        return
    }
    skill2 = true
    skill2Btn.setAttribute("style",`
        background-color: #a41313;
    
    `)
})

skill3Btn.addEventListener("click",function(){
    deactiveSkills()
    if(player.mana === 0){
        alert("You have no Mana, fool")
        return
    }
    skill3 = true
    skill3Btn.setAttribute("style",`
        background-color: #a41313;
    
    `)
})

skill4Btn.addEventListener("click",function(){
    deactiveSkills()
    if(player.mana === 0){
        alert("You have no Mana, fool")
        return
    }
    skill4 = true
    skill4Btn.setAttribute("style",`
        background-color: #a41313;
    
    `)
})

function deactiveSkills(){
    skill1 = false
    skill2 = false
    skill3 = false
    skill4 = false

    skill1Btn.removeAttribute("style",`
        background-color: #a41313;
    
    `)
    skill2Btn.removeAttribute("style",`
        background-color: #a41313;
    
    `)
    skill3Btn.removeAttribute("style",`
        background-color: #a41313;
    
    `)
    skill4Btn.removeAttribute("style",`
        background-color: #a41313;
    
    `)
}




function Character(name, hp, mana, critChance, blockChance){
    this.name = name
    this.hp = hp
    this.mana = mana
    this.critChance = critChance
    this.blockChance = blockChance
}

function beforeGame(){
    mainDiv.setAttribute("style",`
        opacity: 0.2;
    
    `)

    beforeScreen.setAttribute("style",`
        opacity: 1;
        z-index: 1;
    
    `)
}

function startGame(){
    mainDiv.setAttribute("style",`
        opacity: 1;
    
    `)

    beforeScreen.setAttribute("style",`
        opacity: 0;
        z-index: -1;
    
    `)

    player = {
        "name": "",
        "hp": 150,
        "mana": 5
    }
    
    enemy = {
        "name": "Boros the destroyer",
        "hp": 1000,
    }

    renderGame()
}

function renderGame(){
    if(enemy.hp <= 0 | player.hp <= 0){
        beforeGame()
    }
    enemyHP.innerHTML = "HP: " +enemy.hp
    playerHP.innerHTML = "HP: " + player.hp
    playerMana.innerHTML = "Mana: " + player.mana
}



function rollDice(){
    if(!diceRolled){
        let random = Math.floor(Math.random() *6 + 1)
        let string = "dice-" + random
        diceImage.src = diceImage.src.replace(diceSrc, string)
        diceSrc = string
        diceRolled = true
        diceVar = random
    }
    
}

/*function attack(){
    if(diceRolled){
        let damage = diceVar * 10
        let random = Math.floor(Math.random() *8 + 2)
        const critChance1 = Math.floor(Math.random() *5 + 1)
        const critChance2 = Math.floor(Math.random() *5 + 1)
        if(critChance1 === 5){
            damage += damage
        }
        if(critChance2 === 5){
            random += random
        }
        enemy.hp -= damage
        player.hp -= random
        console.log(random)
        diceRolled = false
        renderGame()
    }
    

}*/

function attack(){
    //dmg und effects
    if(!diceRolled){return}
    let playerDmg = diceVar * 10
    let enemyDmg = Math.floor(Math.random() *13 + 4)
    playerDmg = critChance(playerDmg)
    enemyDmg = critChance(enemyDmg)
    
    if(skill1){
        enemyDmg = 0
        player.mana -= 1
        skill1 = false
    }
    else if(skill2){
        playerDmg += playerDmg
        player.mana -= 1
        skill2 = false
    }
    else if(skill3){
        player.hp += playerDmg
        player.mana -= 1
        skill3 = false
    }
    else if(skill4){
        let bonusDmg = player.hp -1
        playerDmg += bonusDmg + playerDmg
        enemyDmg = 0
        player.hp = 1
        player.mana = 0
        skill4 = false
    }
    
    enemy.hp -= playerDmg
    player.hp -= enemyDmg
    diceRolled = false
    deactiveSkills()
    renderGame()
}

function critChance(dmg){
    const critChance = Math.floor(Math.random() *5 + 1)
    if(critChance === 5){
        return dmg*2
    }
    return dmg
}



rollDice()
beforeGame()
