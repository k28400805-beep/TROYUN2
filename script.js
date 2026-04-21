let character = "";

function selectCharacter(name){
character = name;
alert(name + " seçildi!");
}

function goGame(){
if(character === ""){
alert("Önce karakter seç!");
return;
}

localStorage.setItem("character", character);
window.location.href = "game.html";
}
