/* --- Base --- */
class Spaceship {
    constructor(name: string, pilot: string, crewl: number){
        this.name = name
        this.pilot = pilot
        this.crewlimit = crewl 
    }
    name:string
    pilot:string
    crewlimit: number
    crew: string[]
    inMission: false
}
let listSpaceships: Spaceship[] = []

/* --- Features --- */
function createNewSpaceship() {
    let inputName = prompt("Qual nome da nave?\n")
    let inputPilot = prompt("Qual nome do piloto?\n")
    let inputCrewLimit = Number(prompt("Qual limite de tripulantes?\n"))
    addNewSpaceship(inputName, inputPilot, inputCrewLimit)
    alert(`Sua nova EspaçoNave: ${inputName} foi adicionada com sucesso`)
}

function addNewSpaceship(name: string, pilot: string, crewl: number) {
    let newSpace: Spaceship = new Spaceship(name, pilot, crewl)
    listSpaceships.push(newSpace)
    console.log(`Adicionado nova Nave: ${newSpace.name} | Na Lista!`)
}

function addCrew(){
    let listNow:string = ''
    for(const index in listSpaceships)
        listNow += `${listSpaceships[index].name} \n`
    let inputRes:string = String(prompt(`Em qual Nave deseja Adicionar ?\n\n ${listNow}`))
    for(const index in listSpaceships )
        if(listSpaceships[index].name == inputRes) {
            listSpaceships[index].crew.push(inputRes)
        }
}

/* --- Control_Flow --- */
function showMenu() {
    let inputUserMenu = prompt("GERADOR DE NAVES\n O QUE DESEJA FAZER?\n\n 1 - Criar nova Nave\n 2- Add Membro\n 3- Enviar para Missão\n 4- Listar Naves\n")

    switch(inputUserMenu){
        case "1":
            createNewSpaceship()
            break
        case "2":
            addCrew()
            break
        case "3":
            //goToMission()
            break
        case "4":
            //showListSpaceships()
            break
        default:
            alert(`Desculpe a sua expressão: ${inputUserMenu} não pode ser reconhecida`)
    }
}
showMenu()