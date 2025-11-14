import vets from './vets.js';
import "./style.css";

export function CreatVet(vet){
    return`
    <div>
        <img src="${vet.image}" alt="vet">
        <p class="name">${vet.name}</p>
        <p class="specialty">${vet.specialty}</p>
        <p class="location">${vet.location}</p>
    </div>
    `;
}

export const section = document.querySelector('.vets');

vets.forEach(vet => {
    let card = CreatVet(vet)
    section.insertAdjacentHTML('beforeend', card)
});
