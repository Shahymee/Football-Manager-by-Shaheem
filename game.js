let club = "";
let squad = [];

const players = [

/* PREMIER LEAGUE */

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
position:"CAM",
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
position:"CDM/CM",
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
name:"Alexis Mac Allister",
club:"Liverpool",
league:"Premier League",
position:"CM",
rating:84
},

{
name:"Dominik Szoboszlai",
club:"Liverpool",
league:"Premier League",
position:"CM/CAM",
rating:82
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
name:"Nicolas Jackson",
club:"Chelsea",
league:"Premier League",
position:"ST",
rating:79
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
}

];];


window.onload=function(){

let list=document.getElementById("playerList");

players.forEach(player=>{

let option=document.createElement("option");

option.text=
player.name+
" ("+
player.position+
") - "+
player.rating;

list.add(option);

});

};



function startGame(){

club=document.getElementById("clubName").value;

if(club===""){
alert("Enter club name");
return;
}

document.getElementById("teamBox").style.display="block";

alert(club+" created!");

}



function addPlayer(){

let selected=document.getElementById("playerList").value;

let player=players.find(
p=>selected.includes(p.name)
);


if(squad.includes(player)){
alert("Already selected!");
return;
}


squad.push(player);


let li=document.createElement("li");

li.innerHTML=
player.name+
" | "+
player.position+
" | Rating "+
player.rating;


document.getElementById("squad").appendChild(li);

}



function simulateMatch(){

let strength=0;

squad.forEach(player=>{
strength+=player.rating;
});


let yourGoals=Math.floor(
Math.random()*5
);


let opponentGoals=Math.floor(
Math.random()*5
);


document.getElementById("result").innerHTML=

club+
" "+
yourGoals+
" - "+
opponentGoals+
" AI United";


}
