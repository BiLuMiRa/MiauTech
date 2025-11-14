import "./style.css";
import pets from "./pets.js";
import "./filters.js";
import "./slides.js";

export function createPet(pets) {
  return `
  <a href="/Miau-dota/pages/details-pet.html?id=${pets.id}">
    <div>
        <img src="${pets.image}">
        <p class="name">${pets.name}</p>
        <p class="infos-pet">${pets.age} | ${pets.sexo}</p>
        <img src="./public/imgs/miaudota/pata1.png" alt="pata1" class="pata1">
    </div> 
  </a>`;
}

export const petcard = document.querySelector(".pets");

pets.forEach((pets) => {
  let card = createPet(pets);
  petcard.insertAdjacentHTML("beforeend", card);
});


