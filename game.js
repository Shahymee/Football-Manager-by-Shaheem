let club = "";
let squad = [];

const players = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappe",
    "Erling Haaland",
    "Vinicius Jr",
    "Jude Bellingham",
    "Kevin De Bruyne",
    "Rodri",
    "Pedri",
    "Virgil van Dijk",
    "William Saliba",
    "Alisson",
    "Thibaut Courtois"
];


window.onload = function(){

    let list = document.getElementById("playerList");

    players.forEach(player => {
        let option = document.createElement("option");
        option.text = player;
        list.add(option);
    });

}


function startGame(){

    club = document.getElementById("clubName").value;

    if(club === ""){
        alert("Enter a club name!");
        return;
    }

    document.getElementById("teamBox").style.display = "block";

    alert(club + " has been created!");

}


function addPlayer(){

    let player = document.getElementById("playerList").value;

    if(squad.includes(player)){
        alert("Player already selected!");
        return;
    }

    squad.push(player);

    let li = document.createElement("li");
    li.innerHTML = player;

    document.getElementById("squad").appendChild(li);

}


function simulateMatch(){

    let yourGoals = Math.floor(Math.random() * 5);
    let opponentGoals = Math.floor(Math.random() * 5);

    document.getElementById("result").innerHTML =
    club + " " + yourGoals + " - " + opponentGoals + " AI United";

}
