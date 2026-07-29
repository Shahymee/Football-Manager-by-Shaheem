let club = "";
let squad = [];

const players = [

{
name:"Erling Haaland",
club:"Manchester City",
league:"Premier League",
position:"ST",
rating:91
},

{
name:"Kylian Mbappe",
club:"Real Madrid",
league:"La Liga",
position:"LW/ST",
rating:91
},

{
name:"Vinicius Jr",
club:"Real Madrid",
league:"La Liga",
position:"LW",
rating:90
},

{
name:"Jude Bellingham",
club:"Real Madrid",
league:"La Liga",
position:"CM",
rating:90
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
name:"Mohamed Salah",
club:"Liverpool",
league:"Premier League",
position:"RW",
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
name:"William Saliba",
club:"Arsenal",
league:"Premier League",
position:"CB",
rating:87
},

{
name:"Virgil van Dijk",
club:"Liverpool",
league:"Premier League",
position:"CB",
rating:86
},

{
name:"Florian Wirtz",
club:"Bayer Leverkusen",
league:"Bundesliga",
position:"CAM",
rating:87
},

{
name:"Harry Kane",
club:"Bayern Munich",
league:"Bundesliga",
position:"ST",
rating:90
},

{
name:"Lautaro Martinez",
club:"Inter Milan",
league:"Serie A",
position:"ST",
rating:88
},

{
name:"Victor Osimhen",
club:"Napoli",
league:"Serie A",
position:"ST",
rating:87
},

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
name:"Alisson Becker",
club:"Liverpool",
league:"Premier League",
position:"GK",
rating:89
},

{
name:"Thibaut Courtois",
club:"Real Madrid",
league:"La Liga",
position:"GK",
rating:89
}

];


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
