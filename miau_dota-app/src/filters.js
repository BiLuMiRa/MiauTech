import "./style.css";
import pets from "./pets.js";
import { createPet } from "./main.js";
import { petcard } from "./main.js";
import { buttons } from "./buttons.js";

//Mostrar pop-up
const popup = document.getElementById("popup");
const btnFiltrar = document.getElementById("filtrar");

btnFiltrar.addEventListener("click", (event) => {
  popup.style.display = "flex";
  btnFiltrar.style.backgroundColor = "#EEE7D4";
});

//Fechar pop-up
const fechar = document.getElementById("fechar");
fechar.addEventListener("click", (event) => {
  popup.style.display = "none";
  btnFiltrar.style.backgroundColor = "transparent";
});

//Array para acumular os filtros selecionados
let selecionados = [];

//Selecionar botão e o adicionar a um array
function selecionarBtn(btn) {
  btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "#e58233";
    btn.style.color = "white";
    btn.style.border = "none";
    selecionados.push(btn);
  });
}

//Percorre cada elemento de buttons.js e o associa ao evento de clique
buttons.forEach((b) => selecionarBtn(b.element));

//Armazenar parâmetros para a função filtrarPets em lista (Cria um array de arrays)
function arrayFiltros() {
  let lista_filtros = [];

  selecionados.forEach((selecionado) => {
    buttons.forEach((b) => {
      if (selecionado === b.element) {
        lista_filtros.push([b.chave, b.opcao]);
      }
    });
  });
  return lista_filtros;
}

//Filtragem dos pets passando pelo array criado
function filtrarPets(lista) {

//Aplicar todos os filtros em sequência
  const filtrados = lista.reduce((acc, item) => acc.filter((pet) => pet[item[0]]===item[1]), pets
);

//join serve para juntar cards sem vírgula entre eles
petcard.innerHTML = filtrados.map(createPet).join("");
}

//Buscar
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", (event) => {
  filtrarPets(arrayFiltros());
  popup.style.display = "none";
});

//Limpar
const limpar = document.getElementById("limpar");

limpar.addEventListener("click", () => {
  selecionados = [];
  buttons.forEach((b) => {
    const btn = b.element;
    btn.style.backgroundColor = "transparent";
    btn.style.color = "black";
    btn.style.border = "1px solid #c4c1c1";
  });

  petcard.innerHTML = "";
  pets.forEach((pet) => {
    petcard.innerHTML += createPet(pet);
  });
});
