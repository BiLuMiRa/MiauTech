import pets from "./pets"

// Pega a query string da url
const string_url = window.location.search

// Cria um objeto para facilitar a busca
const urlparams = new URLSearchParams(string_url)

// Busca na url o valor da chave "id".
const id_pet = urlparams.get('id')

// Busca no "pets.js" um animap que possua o mesmo id
const pet = pets.find(a => a.id == id_pet)

// Caso o pet exista, atribui os ids as informações do pet
if (pet) {
    document.getElementById('pet-image').src = pet.image
    document.getElementById('pet-name').textContent = pet.name;
    document.getElementById('pet-desc').textContent = pet.desc;
    document.getElementById('pet-sexo').textContent = pet.sexo
    document.getElementById('pet-age').textContent = pet.age;
    if (pet.vacinas) {
      document.getElementById('vacina-bool').textContent = 'SIM'
      document.getElementById('vacina-data').textContent = pet.vacinas
    } else [
      document.getElementById('vacina-bool').textContent = "NÃO"
    ]
    if (pet.castr) {
      document.getElementById('cast-bool').textContent = 'SIM'
      document.getElementById('cast-data').textContent = pet.castr
    } else {
      document.getElementById('cast-bool').textContent = 'NÃO'
    }
    if (pet.vermi) {
      document.getElementById('verm-bool').textContent = 'SIM'
      document.getElementById('verm-data').textContent = pet.vermi
    } else {
      document.getElementById('verm-bool').textContent = 'NÃO'
    }
    if (pet.defici) {
      document.getElementById('defc-bool').textContent = 'SIM'
      document.getElementById('defc-data').textContent = pet.defici
    } else {
      document.getElementById('defc-bool').textContent = 'NÃO'
    }

    // Adiciona o ID do pet no botão
    const btn = document.querySelector(".btnAdotar");
    btn.dataset.petId = pet.id;

    //-----------evento no botão de adotar----------//

  const petID = btn.dataset.petId;
  let marcado = localStorage.getItem("Adotar_" + petID) === "true";
  
  atualizarbotao(btn,marcado);

  btn.addEventListener("click", () => {
    marcado = !marcado;
    localStorage.setItem("Adotar_" + petID, marcado);
    atualizarbotao(btn, marcado);
  });
  
  } else {
    document.body.innerHTML = '<h1 style="color:black;"class="pet-não-encontrado">Pet não encontrado!</h1>';
  }

//-------------------------------------------------//

function atualizarbotao(btn, marcado){
  if(marcado){
    btn.textContent = "Adotado!";
    btn.style.backgroundColor = "#d62e2e"
  }
  else {
    btn.textContent = "Quero Adotar!";
    btn.style.backgroundColor = "";
  }
}