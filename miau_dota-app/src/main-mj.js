import vets from './vets.js';
import "./style-mj.css";
import estetoscopio from "../public/imgs/miaujuda/estetoscopio.png"

export function CreatVet(vet){
    return`
    <div>
    <a href="/MiauTech/pages/details-vet.html?id=${vet.id}">
        <img src="${vet.image}" alt="vet">
        <p class="name">${vet.name}</p>
        <p class="specialty">${vet.specialty}</p>
        <p class="location">${vet.location}</p>
        <img src="${estetoscopio}" alt="estetoscopio" class="estetoscopio">
    </div>
    </a>
    `;
}

export const section = document.querySelector('.vets');

vets.forEach(vet => {
    let card = CreatVet(vet)
    section.insertAdjacentHTML('beforeend', card)
});
