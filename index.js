/* --- Base --- */
var Spaceship = /** @class */ (function () {
    function Spaceship(name, pilot, crewl) {
        this.name = name;
        this.pilot = pilot;
        this.crewlimit = crewl;
        this.inMission = false;
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
    showMenu();
}
function addNewSpaceship(name, pilot, crewl) {
    var newSpace = new Spaceship(name, pilot, crewl);
    listSpaceships.push(newSpace);
    console.log("Adicionado nova Nave: ".concat(newSpace.name, " | Na Lista!"));
    showMenu();
}
function addCrew() {
    var listNow = '';
    for (var index in listSpaceships)
        listNow += " ".concat(listSpaceships[index].name, " \n");
    var inputRes = String(prompt("Em qual Nave deseja Adicionar ?\n\n ".concat(listNow)));
    var spaceAtt = listSpaceships.filter(function (spaceShip) { return spaceShip.name == inputRes; });
    addProcess(spaceAtt);
    function addProcess(spaceShip) {
        var newInputCrew = '';
        newInputCrew = String(prompt("Qual nome do tripulante para adicionar a nave ?"));
        spaceShip[0].crew.push(newInputCrew);
        alert("Tripulante: ".concat(newInputCrew, " Adicionado a Nave: ").concat(spaceShip[0].name, " com Sucesso!"));
        showMenu();
    }
    showMenu();
}
function goToMission() {
    var listNow = '';
    for (var index in listSpaceships)
        if (!listSpaceships[index].inMission)
            listNow += "".concat(listSpaceships[index].name, " \n");
    var inputRes = String(prompt("Qual Nave deseja iniciar miss\u00E3o?\n\n ".concat(listNow)));
    for (var index in listSpaceships)
        if (listSpaceships[index].name == inputRes)
            if (listSpaceships[index].inMission)
                console.log("A Nave ".concat(listSpaceships[index].name, " j\u00E1 esta em miss\u00E3o!"));
            else
                listSpaceships[index].inMission = true;
    showMenu();
}
function showListSpaceships() {
    var listAll = '';
    listSpaceships.forEach(function (spaceShip) {
        listAll += "".concat(spaceShip, " \n\n");
    });
    alert(listAll);
    showMenu();
}
/* --- Control_Flow --- */
function showMenu() {
    var inputUserMenu = '';
    inputUserMenu = prompt("GERADOR DE NAVES\n O QUE DESEJA FAZER?\n\n 1 - Criar nova Nave\n 2- Add Membro\n 3- Enviar para Missão\n 4- Listar Naves\n 5- Sair do Programa");
    switch (inputUserMenu) {
        case "1":
            createNewSpaceship();
            break;
        case "2":
            addCrew();
            break;
        case "3":
            goToMission();
            break;
        case "4":
            showListSpaceships();
            break;
        case "5":
            alert("Você escolheu siar do programa");
            break;
        default:
            alert("Desculpe a sua express\u00E3o: ".concat(inputUserMenu, " n\u00E3o pode ser reconhecida"));
    }
}
showMenu(); // Start Program
