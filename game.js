let club = "";
let selectedPosition = "";
let team = {};


/* ==========================
   PLAYER DATABASE PART 1
   PREMIER LEAGUE
========================== */


const players = [

{
name:"Erling Haaland",
club:"Manchester City",
league:"Premier League",
position:"ST",
rating:91
},

{
name:"Phil Foden",
club:"Manchester City",
league:"Premier League",
position:"LW/CAM",
rating:85
},

{
name:"Rodri",
club:"Manchester City",
league:"Premier League",
position:"CDM",
rating:90
},

{
name:"Kevin De Bruyne",
club:"Manchester City",
league:"Premier League",
position:"CM/CAM",
rating:88
},

{
name:"Bernardo Silva",
club:"Manchester City",
league:"Premier League",
position:"CM/RW",
rating:87
},

{
name:"Ruben Dias",
club:"Manchester City",
league:"Premier League",
position:"CB",
rating:87
},

{
name:"Josko Gvardiol",
club:"Manchester City",
league:"Premier League",
position:"CB/LB",
rating:85
},

{
name:"Ederson",
club:"Manchester City",
league:"Premier League",
position:"GK",
rating:88
},


{
name:"Bukayo Saka",
club:"Arsenal",
league:"Premier League",
position:"RW",
rating:87
},

{
name:"Martin Odegaard",
club:"Arsenal",
league:"Premier League",
position:"CAM",
rating:86
},

{
name:"Declan Rice",
club:"Arsenal",
league:"Premier League",
position:"CDM",
rating:86
},

{
name:"William Saliba",
club:"Arsenal",
league:"Premier League",
position:"CB",
rating:87
},

{
name:"Gabriel Magalhaes",
club:"Arsenal",
league:"Premier League",
position:"CB",
rating:85
},

{
name:"Gabriel Martinelli",
club:"Arsenal",
league:"Premier League",
position:"LW",
rating:83
},

{
name:"David Raya",
club:"Arsenal",
league:"Premier League",
position:"GK",
rating:83
},


{
name:"Mohamed Salah",
club:"Liverpool",
league:"Premier League",
position:"RW",
rating:88
},

{
name:"Virgil van Dijk",
club:"Liverpool",
league:"Premier League",
position:"CB",
rating:86
},

{
name:"Alisson Becker",
club:"Liverpool",
league:"Premier League",
position:"GK",
rating:89
},

{
name:"Luis Diaz",
club:"Liverpool",
league:"Premier League",
position:"LW",
rating:84
},

{
name:"Darwin Nunez",
club:"Liverpool",
league:"Premier League",
position:"ST",
rating:82
},

{
name:"Alexis Mac Allister",
club:"Liverpool",
league:"Premier League",
position:"CM",
rating:84
},

{
name:"Trent Alexander-Arnold",
club:"Liverpool",
league:"Premier League",
position:"RB",
rating:85
},


{
name:"Cole Palmer",
club:"Chelsea",
league:"Premier League",
position:"CAM/RW",
rating:85
},

{
name:"Enzo Fernandez",
club:"Chelsea",
league:"Premier League",
position:"CM",
rating:82
},

{
name:"Moises Caicedo",
club:"Chelsea",
league:"Premier League",
position:"CDM",
rating:81
},

{
name:"Christopher Nkunku",
club:"Chelsea",
league:"Premier League",
position:"ST/CAM",
rating:82
},


{
name:"Bruno Fernandes",
club:"Manchester United",
league:"Premier League",
position:"CAM",
rating:84
},

{
name:"Marcus Rashford",
club:"Manchester United",
league:"Premier League",
position:"LW",
rating:81
},

{
name:"Kobbie Mainoo",
club:"Manchester United",
league:"Premier League",
position:"CM",
rating:78
},

{
name:"Andre Onana",
club:"Manchester United",
league:"Premier League",
position:"GK",
rating:80
},


{
name:"Son Heung-min",
club:"Tottenham",
league:"Premier League",
position:"LW/ST",
rating:84
},

{
name:"James Maddison",
club:"Tottenham",
league:"Premier League",
position:"CAM",
rating:81
},

{
name:"Cristian Romero",
club:"Tottenham",
league:"Premier League",
position:"CB",
rating:82
},


{
name:"Alexander Isak",
club:"Newcastle United",
league:"Premier League",
position:"ST",
rating:83
},

{
name:"Bruno Guimaraes",
club:"Newcastle United",
league:"Premier League",
position:"CM",
rating:84
},

{
name:"Anthony Gordon",
club:"Newcastle United",
league:"Premier League",
position:"LW",
rating:81
},


{
name:"Ollie Watkins",
club:"Aston Villa",
league:"Premier League",
position:"ST",
rating:82
},

{
name:"Douglas Luiz",
club:"Aston Villa",
league:"Premier League",
position:"CM",
rating:82
},

{
name:"Emiliano Martinez",
club:"Aston Villa",
league:"Premier League",
position:"GK",
rating:84
}

// ==========================
// MORE PLAYERS PART 2
// ==========================


,

{
name:"Lucas Paqueta",
club:"West Ham",
league:"Premier League",
position:"CAM",
rating:81
},

{
name:"Jarrod Bowen",
club:"West Ham",
league:"Premier League",
position:"RW",
rating:81
},

{
name:"Mohammed Kudus",
club:"West Ham",
league:"Premier League",
position:"LW/CAM",
rating:82
},


{
name:"Kaoru Mitoma",
club:"Brighton",
league:"Premier League",
position:"LW",
rating:80
},

{
name:"Joao Pedro",
club:"Brighton",
league:"Premier League",
position:"ST",
rating:79
},


{
name:"Eberechi Eze",
club:"Crystal Palace",
league:"Premier League",
position:"CAM",
rating:81
},

{
name:"Marc Guehi",
club:"Crystal Palace",
league:"Premier League",
position:"CB",
rating:80
},


{
name:"Matheus Cunha",
club:"Wolves",
league:"Premier League",
position:"ST/CAM",
rating:79
},


// ==========================
// LA LIGA
// ==========================


{
name:"Jude Bellingham",
club:"Real Madrid",
league:"La Liga",
position:"CM/CAM",
rating:90
},

{
name:"Vinicius Junior",
club:"Real Madrid",
league:"La Liga",
position:"LW",
rating:90
},

{
name:"Federico Valverde",
club:"Real Madrid",
league:"La Liga",
position:"CM",
rating:87
},

{
name:"Antonio Rudiger",
club:"Real Madrid",
league:"La Liga",
position:"CB",
rating:86
},

{
name:"Thibaut Courtois",
club:"Real Madrid",
league:"La Liga",
position:"GK",
rating:89
},

{
name:"Rodrygo",
club:"Real Madrid",
league:"La Liga",
position:"RW",
rating:85
},


{
name:"Robert Lewandowski",
club:"Barcelona",
league:"La Liga",
position:"ST",
rating:88
},

{
name:"Lamine Yamal",
club:"Barcelona",
league:"La Liga",
position:"RW",
rating:86
},

{
name:"Pedri",
club:"Barcelona",
league:"La Liga",
position:"CM",
rating:86
},

{
name:"Gavi",
club:"Barcelona",
league:"La Liga",
position:"CM",
rating:81
},

{
name:"Raphinha",
club:"Barcelona",
league:"La Liga",
position:"RW/LW",
rating:84
},

{
name:"Marc-Andre ter Stegen",
club:"Barcelona",
league:"La Liga",
position:"GK",
rating:86
},


{
name:"Antoine Griezmann",
club:"Atletico Madrid",
league:"La Liga",
position:"ST/CAM",
rating:85
},

{
name:"Julian Alvarez",
club:"Atletico Madrid",
league:"La Liga",
position:"ST",
rating:84
},

{
name:"Jan Oblak",
club:"Atletico Madrid",
league:"La Liga",
position:"GK",
rating:88
},


// ==========================
// BUNDESLIGA
// ==========================


{
name:"Harry Kane",
club:"Bayern Munich",
league:"Bundesliga",
position:"ST",
rating:90
},

{
name:"Jamal Musiala",
club:"Bayern Munich",
league:"Bundesliga",
position:"CAM",
rating:86
},

{
name:"Joshua Kimmich",
club:"Bayern Munich",
league:"Bundesliga",
position:"CM/CDM",
rating:86
},

{
name:"Alphonso Davies",
club:"Bayern Munich",
league:"Bundesliga",
position:"LB",
rating:84
},

{
name:"Manuel Neuer",
club:"Bayern Munich",
league:"Bundesliga",
position:"GK",
rating:85
},


{
name:"Florian Wirtz",
club:"Bayer Leverkusen",
league:"Bundesliga",
position:"CAM",
rating:87
},

{
name:"Victor Boniface",
club:"Bayer Leverkusen",
league:"Bundesliga",
position:"ST",
rating:82
},

{
name:"Jeremie Frimpong",
club:"Bayer Leverkusen",
league:"Bundesliga",
position:"RB",
rating:83
},


{
name:"Serhou Guirassy",
club:"Borussia Dortmund",
league:"Bundesliga",
position:"ST",
rating:83
},

{
name:"Karim Adeyemi",
club:"Borussia Dortmund",
league:"Bundesliga",
position:"LW",
rating:79
},


// ==========================
// SERIE A
// ==========================


{
name:"Lautaro Martinez",
club:"Inter Milan",
league:"Serie A",
position:"ST",
rating:88
},

{
name:"Nicolo Barella",
club:"Inter Milan",
league:"Serie A",
position:"CM",
rating:86
},

{
name:"Alessandro Bastoni",
club:"Inter Milan",
league:"Serie A",
position:"CB",
rating:85
},


{
name:"Rafael Leao",
club:"AC Milan",
league:"Serie A",
position:"LW",
rating:85
},

{
name:"Theo Hernandez",
club:"AC Milan",
league:"Serie A",
position:"LB",
rating:85
},


{
name:"Dusan Vlahovic",
club:"Juventus",
league:"Serie A",
position:"ST",
rating:82
},

{
name:"Federico Chiesa",
club:"Juventus",
league:"Serie A",
position:"LW/RW",
rating:82
},


{
name:"Victor Osimhen",
club:"Napoli",
league:"Serie A",
position:"ST",
rating:87
},


// ==========================
// LIGUE 1
// ==========================


{
name:"Ousmane Dembele",
club:"PSG",
league:"Ligue 1",
position:"RW",
rating:86
},

{
name:"Achraf Hakimi",
club:"PSG",
league:"Ligue 1",
position:"RB",
rating:87
},

{
name:"Marquinhos",
club:"PSG",
league:"Ligue 1",
position:"CB",
rating:85
},

{
name:"Warren Zaire-Emery",
club:"PSG",
league:"Ligue 1",
position:"CM",
rating:80
},

{
name:"Bradley Barcola",
club:"PSG",
league:"Ligue 1",
position:"LW",
rating:82
},


{
name:"Breel Embolo",
club:"Monaco",
league:"Ligue 1",
position:"ST",
rating:78
},


];



/* ==========================
   GAME FUNCTIONS
========================== */


function startGame(){

club=document.getElementById("clubName").value;


if(club===""){
alert("Enter club name");
return;
}


document.getElementById("pitchContainer").style.display="block";


document.getElementById("clubTitle").innerHTML =
club + " Starting XI";

}



function selectPosition(position){

selectedPosition=position;


let available = players.filter(
player => !Object.values(team).includes(player)
);


let message =
"Choose player for "+position+"\n\n";


available.forEach((player,index)=>{

message +=
(index+1)+". "+
player.name+
" ("+
player.position+
") "+
player.rating+
"\n";

});


let choice = prompt(message);


let chosen = available[Number(choice)-1];


if(chosen){

team[position]=chosen;


document.getElementById(position).innerHTML =
chosen.name+
"<br>"+
chosen.rating;


}

}



function simulateMatch(){

let rating=0;


Object.values(team).forEach(player=>{

rating += player.rating;

});


let goals=Math.floor(Math.random()*5);

let opponent=Math.floor(Math.random()*5);


document.getElementById("result").innerHTML =

club+
" "+
goals+
" - "+
opponent+
" AI United";


}
