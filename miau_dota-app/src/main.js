import './style.css'
import pets from './pets'

function createPet(pets){
    return `
    <div>
        <img src="${pets.image}">
        <p class="name">${pets.name}</p>
        <p class="infos-pet">${pets.age} | ${pets.sexo}</p>
        <img src="src/imgs/Itens miaudota/pata1.png" alt="pata1" id="pata1">
    </div>`
           
}

const petcard = document.querySelector('.pets');

pets.forEach((pets) => {
    let card = createPet(pets);
    petcard.insertAdjacentHTML('beforeend', card);
});
