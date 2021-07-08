var nome = "Fabio Reis";
var cargo = "Desenvolverdor Full Stack";

var nomeHtml = document.getElementById("name");
var cargoHtml = document.getElementById("cg");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome); {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo); {
    cargoHtml.innerHTML = cargo;
}
function logarNome() {
    console.log(nome);
}
function ClicounosProjetos() {
    console.log("clickou no botão projetos");
    texto2.style.display= "block";
    texto1.style.display= "none";
}
function ClickNoSobre() {
    console.log("clickou no botão sobre");
    texto2.style.display= "block";
    texto1.style.display= "none";
}

colocarCargoNoHtml(cargo);
colocarNomeNoHtml(nome);

