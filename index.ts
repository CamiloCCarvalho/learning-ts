/* --- Base --- */
class Spaceship {
    constructor(name: string, pilot: string, crewl: number){
        this.name = name
        this.pilot = pilot
        this.crewlimit = crewl
        this.inMission = false
    }
    name:string
    pilot:string
    crewlimit: number
    crew: string[]
    inMission: boolean
}
let listSpaceships: Spaceship[] = []

/* --- Features --- */
function createNewSpaceship() {
    let inputName = prompt("Qual nome da nave?\n")
    let inputPilot = prompt("Qual nome do piloto?\n")
    let inputCrewLimit = Number(prompt("Qual limite de tripulantes?\n"))
    addNewSpaceship(inputName, inputPilot, inputCrewLimit)
    alert(`Sua nova EspaçoNave: ${inputName} foi adicionada com sucesso`)
    showMenu()
}

function addNewSpaceship(name: string, pilot: string, crewl: number) {
    let newSpace: Spaceship = new Spaceship(name, pilot, crewl)
    listSpaceships.push(newSpace)
    console.log(`Adicionado nova Nave: ${newSpace.name} | Na Lista!`)
    showMenu()
}

function addCrew(){
    let listNow:string = ''
    for(const index in listSpaceships)
        listNow += ` ${listSpaceships[index].name} \n`
    let inputRes:string = String(prompt(`Em qual Nave deseja Adicionar ?\n\n ${listNow}`))
    
    let spaceAtt = listSpaceships.filter(spaceShip => spaceShip.name == inputRes)
    addProcess(spaceAtt)
    function addProcess(spaceShip:Spaceship[]){
        let newInputCrew:string = ''
        newInputCrew = String(prompt(`Qual nome do tripulante para adicionar a nave ?`))
        spaceShip[0].crew.push(newInputCrew)
        alert(`Tripulante: ${newInputCrew} Adicionado a Nave: ${spaceShip[0].name} com Sucesso!`)
        showMenu()
    }
    showMenu()
}

function goToMission(){
    let listNow:string = ''
    for(const index in listSpaceships)
        if(!listSpaceships[index].inMission)
            listNow += `${listSpaceships[index].name} \n`

    let inputRes:string = String(prompt(`Qual Nave deseja iniciar missão?\n\n ${listNow}`))
    
    for(const index in listSpaceships )
        if(listSpaceships[index].name == inputRes)
            if(listSpaceships[index].inMission)
                console.log(`A Nave ${listSpaceships[index].name} já esta em missão!`)
            else
                listSpaceships[index].inMission = true
    showMenu()
}

function showListSpaceships(){
    let listAll:string = ''
    listSpaceships.forEach((spaceShip) => {
        listAll += `${spaceShip} \n\n`
    })
    alert(listAll)
    showMenu()
}

/* --- Control_Flow --- */
function showMenu() {
    let inputUserMenu:string = ''
    inputUserMenu = prompt("GERADOR DE NAVES\n O QUE DESEJA FAZER?\n\n 1 - Criar nova Nave\n 2- Add Membro\n 3- Enviar para Missão\n 4- Listar Naves\n 5- Sair do Programa")
    switch(inputUserMenu){
        case "1":
            createNewSpaceship()
            break
        case "2":
            addCrew()
            break
        case "3":
            goToMission()
            break
        case "4":
            showListSpaceships()
            break
        case "5":
            alert("Você escolheu siar do programa")
            break
        default:
            alert(`Desculpe a sua expressão: ${inputUserMenu} não pode ser reconhecida`)
    }
}
showMenu() // Start Program