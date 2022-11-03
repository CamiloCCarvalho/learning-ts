/* --- Base --- */
var Spaceship = /** @class */ (function () {
    function Spaceship(name, pilot, crewl) {
        this.name = name;
        this.pilot = pilot;
        this.crewlimit = crewl;
    }
    return Spaceship;
}());
var listSpaceships = [];
/* --- Features --- */
function createNewSpaceship() {
    var inputName = prompt("Qual nome da nave?\n");
    var inputPilot = prompt("Qual nome do piloto?\n");
    var inputCrewLimit = Number(prompt("Qual limite de tripulantes?\n"));
    addNewSpaceship(inputName, inputPilot, inputCrewLimit);
    alert("Sua nova Espa\u00E7oNave: ".concat(inputName, " foi adicionada com sucesso"));
}
function addNewSpaceship(name, pilot, crewl) {
    var newSpace = new Spaceship(name, pilot, crewl);
    listSpaceships.push(newSpace);
    console.log("Adicionado nova Nave: ".concat(newSpace.name, " | Na Lista!"));
}
function addCrew() {
    var listNow = '';
    for (var index in listSpaceships)
        listNow += "".concat(listSpaceships[index].name, " \n");
    var inputRes = prompt("Em qual Nave deseja Adicionar ?\n\n ".concat(listNow));
}
/* --- Control_Flow --- */
function showMenu() {
    var inputUserMenu = prompt("GERADOR DE NAVES\n O QUE DESEJA FAZER?\n\n 1 - Criar nova Nave\n 2- Add Membro\n 3- Enviar para Missão\n 4- Listar Naves\n");
    switch (inputUserMenu) {
        case "1":
            createNewSpaceship();
            break;
        case "2":
            addCrew();
            break;
        case "3":
            //goToMission()
            break;
        case "4":
            //showListSpaceships()
            break;
        default:
            alert("Desculpe a sua express\u00E3o: ".concat(inputUserMenu, " n\u00E3o pode ser reconhecida"));
    }
}
showMenu();
