import vets from './vets.js';
import "./style-mj.css";

export function CreatVet(vet){
    return`
    <a href="/MiauTech/pages/details-vet.html?id=${vet.id}">
    <div>
        <img src="${vet.image}" alt="vet">
        <p class="name">${vet.name}</p>
        <p class="specialty">${vet.specialty}</p>
        <p class="location">${vet.location}</p>
        <img src="../public/imgs/miaujuda/estetoscopio.png" alt="estetoscopio" class="estetoscopio">
    </div>
    </a>
    `;
}

export const section = document.querySelector('.vets');

vets.forEach(vet => {
    let card = CreatVet(vet)
    section.insertAdjacentHTML('beforeend', card)
});
